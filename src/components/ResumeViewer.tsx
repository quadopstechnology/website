"use client";

import { useState, useEffect, useRef } from "react";
import { Document, Page, pdfjs } from "react-pdf";

// Configure worker using CDN matching the installed pdf.js version
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface ResumeViewerProps {
  pdfUrl: string;
}

export default function ResumeViewer({ pdfUrl }: ResumeViewerProps) {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [scale, setScale] = useState<number>(1.0);

  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState<number>(500);

  // ResizeObserver to track container width and scale PDF dynamically
  useEffect(() => {
    if (!containerRef.current) return;

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        // Subtract 48px to account for outer padding and the vertical scrollbar width
        setContainerWidth(Math.floor(entry.contentRect.width - 48));
      }
    });

    resizeObserver.observe(containerRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  return (
    <div
      ref={containerRef}
      className="flex flex-col items-center w-full h-full gap-4 overflow-hidden"
    >
      {/* Controls */}
      {/* <div className="flex items-center gap-3 bg-surface-container-high px-4 py-2 rounded-xl border border-outline-variant/30 z-10 shadow-sm w-full max-w-sm justify-between">
        <div className="flex items-center gap-2">
          <button
            disabled={pageNumber <= 1}
            onClick={() => setPageNumber((prev) => Math.max(1, prev - 1))}
            className="p-1 rounded hover:bg-outline-variant/20 disabled:opacity-40 text-on-surface cursor-pointer flex items-center justify-center border-none"
          >
            <span className="material-symbols-outlined text-lg">navigate_before</span>
          </button>
          <span className="text-xs text-on-surface-variant font-medium text-center">
            {pageNumber} / {numPages || "--"}
          </span>
          <button
            disabled={numPages === null || pageNumber >= numPages}
            onClick={() => setPageNumber((prev) => Math.min(numPages || 1, prev + 1))}
            className="p-1 rounded hover:bg-outline-variant/20 disabled:opacity-40 text-on-surface cursor-pointer flex items-center justify-center border-none"
          >
            <span className="material-symbols-outlined text-lg">navigate_next</span>
          </button>
        </div>

        <div className="w-px h-4 bg-outline-variant/30"></div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setScale((prev) => Math.max(0.5, prev - 0.1))}
            className="p-1 rounded hover:bg-outline-variant/20 text-on-surface cursor-pointer flex items-center justify-center border-none"
            title="Zoom Out"
          >
            <span className="material-symbols-outlined text-base">zoom_out</span>
          </button>
          <span className="text-xs text-on-surface-variant font-medium min-w-[32px] text-center">
            {Math.round(scale * 100)}%
          </span>
          <button
            onClick={() => setScale((prev) => Math.min(1.8, prev + 0.1))}
            className="p-1 rounded hover:bg-outline-variant/20 text-on-surface cursor-pointer flex items-center justify-center border-none"
            title="Zoom In"
          >
            <span className="material-symbols-outlined text-base">zoom_in</span>
          </button>
        </div>
      </div> */}

      {/* PDF Canvas page view */}
      <div className="flex-1 w-full flex justify-center items-start overflow-y-auto overflow-x-hidden p-2">
        <style>{`
          .react-pdf__Page__canvas {
            max-width: 100% !important;
            height: auto !important;
          }
          .react-pdf__Page {
            max-width: 100% !important;
            display: flex !important;
            justify-content: center !important;
          }
        `}</style>
        <Document
          file={pdfUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          loading={
            <div className="flex flex-col items-center justify-center py-20 gap-3 text-on-surface-variant w-full">
              <span className="material-symbols-outlined animate-spin text-3xl text-tertiary">
                sync
              </span>
              <span className="text-sm font-medium">Loading Document...</span>
            </div>
          }
          error={
            <div className="flex flex-col items-center justify-center py-20 gap-3 text-error w-full">
              <span className="material-symbols-outlined text-3xl">error</span>
              <span className="text-sm font-medium">
                Failed to load resume PDF.
              </span>
            </div>
          }
        >
          <Page
            pageNumber={pageNumber}
            width={containerWidth}
            scale={scale}
            renderAnnotationLayer={false}
            renderTextLayer={false}
            className="shadow-xl rounded-lg border border-outline-variant/20 overflow-hidden bg-white max-w-full"
          />
        </Document>
      </div>
    </div>
  );
}
