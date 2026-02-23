"use client";

import React, { useState, useEffect, useRef } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import HTMLFlipBook from "react-pageflip";
import type { PageFlip } from "page-flip";
import type { Dispatch, SetStateAction, RefObject } from "react";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

// -------------------- Page Component --------------------
const PageComponent = React.forwardRef<
  HTMLDivElement,
  { pageNumber: number; width: number }
>(({ pageNumber, width }, ref) => {
  return (
    <div
      ref={ref}
      className="bg-white shadow-lg"
      style={{ width: "100%", height: "100%" }}
    >
      <Page
        pageNumber={pageNumber}
        width={width}
        renderTextLayer={false}
        renderAnnotationLayer={false}
      />
    </div>
  );
});

PageComponent.displayName = "PageComponent";

// -------------------- FlipBook Ref Type --------------------
type FlipBookRef = {
  pageFlip: () => PageFlip;
};

// -------------------- Main Component --------------------
export default function PdfFlipPage() {
  const [numPages, setNumPages] = useState(0);
  const [pageWidth, setPageWidth] = useState(400);
  const [pageHeight, setPageHeight] = useState(566);
  const [currentPage, setCurrentPage] = useState(0);
  const [zoom, setZoom] = useState(1);

  const containerRef = useRef<HTMLDivElement>(null);
  const flipBookRef = useRef<FlipBookRef | null>(null);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  useEffect(() => {
    const updateDimensions = () => {
      if (!containerRef.current) return;

      const containerWidth = containerRef.current.clientWidth;
      const containerHeight = containerRef.current.clientHeight;
      const a4Ratio = 1.414;
      const isMobile = window.innerWidth < 768;

      if (isMobile) {
        const width = Math.min(containerWidth * 0.9, 500);
        setPageWidth(width);
        setPageHeight(width * a4Ratio);
      } else {
        const availableWidth = containerWidth * 0.45;
        const availableHeight = containerHeight * 0.85;

        let width = availableHeight / a4Ratio;
        let height = availableHeight;

        if (width > availableWidth) {
          width = availableWidth;
          height = width * a4Ratio;
        }

        setPageWidth(Math.min(width, 600));
        setPageHeight(Math.min(height, 600 * a4Ratio));
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full origin-center flex overflow-clip relative justify-center py-10 items-center p-4"
    >
      <ControlBar
        zoom={zoom}
        setZoom={setZoom}
        flipBookRef={flipBookRef}
        currentPage={currentPage}
        numPages={numPages}
      />
      <Document
        file="/pdfs/IMD_Book_2.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
        loading={
          <div className="text-center w-[calc(50vh)] flex items-center justify-center aspect-[1/1.4] text-(--accent-8) p-4">
            Loading ...
          </div>
        }
      >
        {numPages > 0 && (
          <HTMLFlipBook
            width={pageWidth}
            height={pageHeight}
            ref={flipBookRef}
            onFlip={(e) => setCurrentPage(e.data)}
            size="fixed"
            minWidth={200}
            maxWidth={600}
            minHeight={283}
            maxHeight={848}
            showCover={false}
            mobileScrollSupport={zoom === 1}
            className="shadow-2xl transition-all"
            startPage={0}
            drawShadow={zoom === 1}
            flippingTime={zoom === 1 ? 700 : 0}
            usePortrait={window.innerWidth < 768}
            startZIndex={0}
            autoSize={true}
            maxShadowOpacity={0.5}
            showPageCorners={zoom === 1}
            disableFlipByClick={zoom != 1}
            clickEventForward={true}
            useMouseEvents={zoom === 1}
            swipeDistance={zoom === 1 ? 30 : 9999}
            style={{
              transform: `scale(${zoom})`,
              transformOrigin: "center center",
            }}
          >
            {Array.from({ length: numPages }, (_, i) => (
              <PageComponent key={i + 1} pageNumber={i + 1} width={pageWidth} />
            ))}
          </HTMLFlipBook>
        )}
      </Document>
    </div>
  );
}

// -------------------- Control Bar --------------------
interface ControlBarProps {
  zoom: number;
  setZoom: Dispatch<SetStateAction<number>>;
  flipBookRef: RefObject<FlipBookRef | null>;
  currentPage: number;
  numPages: number;
}

const ControlBar = ({
  zoom,
  setZoom,
  flipBookRef,
  currentPage,
  numPages,
}: ControlBarProps) => {
  return (
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full flex items-center gap-4 backdrop-blur-md z-50">
      <button
        onClick={() => flipBookRef.current?.pageFlip().flipPrev()}
        className="px-3 py-1 hover:bg-white/20 rounded"
      >
        ◀
      </button>

      <span className="text-xs flex gap-x-0.5 items-center lg:text-sm">
        <span>{currentPage + 1}</span>
        <span>/</span>
        <span> {numPages}</span>
      </span>

      <button
        onClick={() => flipBookRef.current?.pageFlip().flipNext()}
        className="px-3 py-1 hover:bg-white/20 rounded"
      >
        ▶
      </button>

      <div className="w-px h-5 bg-white/30 mx-2" />

      <button
        onClick={() => setZoom((z) => Math.max(0.8, z - 0.1))}
        className="px-2"
      >
        −
      </button>

      <span className="text-sm">{Math.round(zoom * 100)}%</span>

      <button
        onClick={() => setZoom((z) => Math.min(2, z + 0.1))}
        className="px-2"
      >
        +
      </button>
    </div>
  );
};
