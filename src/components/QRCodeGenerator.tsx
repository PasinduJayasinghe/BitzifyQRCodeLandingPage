import React, { useRef } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import './QRCodeGenerator.css';

interface QRCodeGeneratorProps {
  url: string;
  fileName?: string;
  size?: number;
}

const QRCodeGenerator: React.FC<QRCodeGeneratorProps> = ({
  url,
  fileName = 'event-qr-code.png',
  size = 1024
}) => {
  const qrRef = useRef<HTMLDivElement>(null);

  const downloadQRCode = async () => {
    if (!qrRef.current) return;

    try {
      // Get the SVG element
      const svgElement = qrRef.current.querySelector('svg');
      if (!svgElement) return;

      // Convert SVG to data URL
      const svgData = new XMLSerializer().serializeToString(svgElement);
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const img = new Image();

      // Set canvas size
      canvas.width = size;
      canvas.height = size;

      // Create a blob from the SVG data
      const blob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
      const url = URL.createObjectURL(blob);

      // Load the SVG into an image
      img.onload = () => {
        if (ctx) {
          // Draw the image on canvas
          ctx.drawImage(img, 0, 0, size, size);

          // Convert canvas to PNG
          const pngData = canvas.toDataURL('image/png');

          // Create download link
          const link = document.createElement('a');
          link.href = pngData;
          link.download = fileName;

          // Trigger download
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);

          // Cleanup
          URL.revokeObjectURL(url);
        }
      };

      img.src = url;
    } catch (error) {
      console.error('Error generating QR code:', error);
      alert('Failed to generate QR code. Please try again.');
    }
  };

  return (
    <div className="qr-generator">
      <div ref={qrRef} style={{ display: 'none' }}>
        <QRCodeSVG
          value={url}
          size={size}
          level="H"
          includeMargin={true}
          bgColor="#ffffff"
          fgColor="#2c1911"
        />
      </div>
      <button onClick={downloadQRCode} className="download-button">
        Download QR Code
      </button>
    </div>
  );
};

export default QRCodeGenerator; 