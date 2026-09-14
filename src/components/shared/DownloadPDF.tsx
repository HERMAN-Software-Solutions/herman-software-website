"use client";

interface DownloadPDFProps {
  title: string;
  sector: string;
  challenge: string;
  solution: string;
  result: string;
  technologies: string[];
  className?: string;
}

// Insert zero-width spaces into very long unbroken words (URLs, code identifiers)
// so jsPDF's splitTextToSize can break them across lines
function breakLongWords(text: string, maxLen = 30): string {
  return text.replace(/\S{30,}/g, (match) =>
    match.replace(new RegExp(`(.{${maxLen}})`, "g"), "$1\u200B")
  );
}

export function DownloadPDF({
  title,
  sector,
  challenge,
  solution,
  result,
  technologies,
  className = "",
}: DownloadPDFProps) {
  const handleDownload = async () => {
    const { jsPDF } = await import("jspdf");

    const doc = new jsPDF({ unit: "mm", format: "a4" });
    const pageWidth = doc.internal.pageSize.getWidth();   // ~210mm
    const pageHeight = doc.internal.pageSize.getHeight(); // ~297mm
    const margin = 20;
    const maxWidth = pageWidth - margin * 2;
    const bottomLimit = pageHeight - 25; // leave room for footer

    let y = 25;

    // ─── Helper: Add a new page if we're about to overflow ───
    function ensureSpace(needed: number) {
      if (y + needed > bottomLimit) {
        doc.addPage();
        y = 25;
        return true;
      }
      return false;
    }

    // ─── Helper: Render wrapped text with auto-pagination ───
    function addText(
      text: string,
      options: {
        fontSize?: number;
        fontStyle?: "normal" | "bold" | "italic";
        color?: [number, number, number];
        lineHeight?: number;
        spaceAfter?: number;
      } = {}
    ) {
      const {
        fontSize = 10,
        fontStyle = "normal",
        color = [55, 65, 81],
        lineHeight = 5.5,
        spaceAfter = 6,
      } = options;

      doc.setFontSize(fontSize);
      doc.setFont("helvetica", fontStyle);
      doc.setTextColor(...color);

      const cleanText = breakLongWords(text);
      const lines = doc.splitTextToSize(cleanText, maxWidth);

      for (const line of lines) {
        if (ensureSpace(lineHeight)) {
          // re-apply styling after page break (jsPDF resets)
          doc.setFontSize(fontSize);
          doc.setFont("helvetica", fontStyle);
          doc.setTextColor(...color);
        }
        doc.text(line, margin, y);
        y += lineHeight;
      }
      y += spaceAfter;
    }

    // ─── Helper: Section heading ───
    function addHeading(text: string) {
      ensureSpace(12);
      doc.setFontSize(13);
      doc.setFont("helvetica", "bold");
      doc.setTextColor(10, 31, 63);
      doc.text(text, margin, y);
      y += 7;
    }

    // ─── Helper: Horizontal rule ───
    function addRule() {
      ensureSpace(4);
      doc.setDrawColor(0, 194, 186);
      doc.setLineWidth(0.4);
      doc.line(margin, y, pageWidth - margin, y);
      y += 6;
    }

    // ─── Header ───
    doc.setFontSize(22);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(10, 31, 63);
    doc.text("HERMAN Software Solutions", margin, y);
    y += 10;

    doc.setFontSize(14);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(0, 194, 186);
    doc.text("Case Study", margin, y);
    y += 6;

    addRule();

    // ─── Project title ───
    y += 4;
    doc.setFontSize(18);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(10, 31, 63);
    const titleLines = doc.splitTextToSize(breakLongWords(title), maxWidth);
    for (const line of titleLines) {
      ensureSpace(8);
      doc.setFontSize(18);
      doc.setFont("helvetica", "bold");
      doc.setTextColor(10, 31, 63);
      doc.text(line, margin, y);
      y += 8;
    }

    // ─── Sector ───
    doc.setFontSize(11);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(107, 114, 128);
    doc.text(`Sector: ${sector}`, margin, y);
    y += 12;

    // ─── Challenge ───
    if (challenge) {
      addHeading("THE CHALLENGE");
      addText(challenge);
    }

    // ─── Solution ───
    if (solution) {
      addHeading("OUR SOLUTION");
      addText(solution);
    }

    // ─── Result ───
    if (result) {
      addHeading("THE RESULT");
      addText(result);
    }

    // ─── Technologies ───
    if (technologies && technologies.length > 0) {
      addHeading("TECHNOLOGIES");
      addText(technologies.join(", "), { spaceAfter: 4 });
    }

    // ─── Footer (added to EVERY page after all content is drawn) ───
    const totalPages = doc.getNumberOfPages();
    for (let i = 1; i <= totalPages; i++) {
      doc.setPage(i);
      const footerY = pageHeight - 15;

      doc.setDrawColor(0, 194, 186);
      doc.setLineWidth(0.4);
      doc.line(margin, footerY - 4, pageWidth - margin, footerY - 4);

      doc.setFontSize(8);
      doc.setFont("helvetica", "normal");
      doc.setTextColor(107, 114, 128);
      doc.text(
        "HERMAN Software Solutions Limited | Gabula Rd, Jinja, Uganda",
        margin,
        footerY
      );
      doc.text(
        "infohermansoftware@gmail.com | +256772723188 | herman-software-website.vercel.app",
        margin,
        footerY + 4
      );

      // Page number
      doc.text(`Page ${i} of ${totalPages}`, pageWidth - margin, footerY + 4, {
        align: "right",
      });
    }

    // ─── Save ───
    const filename = `${title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}-case-study.pdf`;
    doc.save(filename);
  };

  return (
    <button
      onClick={handleDownload}
      className={`inline-flex items-center gap-2 rounded-md border border-white/20 px-4 py-2 text-body-sm text-white hover:bg-white/10 transition-colors ${className}`}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
      Download Case Study (PDF)
    </button>
  );
}