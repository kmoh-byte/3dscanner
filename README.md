# IPD Measurement App for VR Gaming

Accurate Interpupillary Distance (IPD) measurement tool using MediaPipe AI face detection for esports and VR gaming applications.

## Features

- **Real-time face landmark detection** using Google MediaPipe
- **Accurate pupil tracking** with 3D distance calculation
- **Multiple measurement averaging** for precision
- **Statistical validation** to ensure measurement consistency
- **Direct WorldRenderer.InterpupillaryDistance output**
- **One-click copy to clipboard**

## Live Demo

Visit the deployed app: [Your Railway URL]

## Local Development

### Prerequisites

- Node.js 18 or higher
- Modern web browser with webcam access

### Installation

```bash
npm install
```

### Run Locally

```bash
npm start
```

Visit `http://localhost:3000` in your browser.

## Deployment to Railway.app

1. Fork/Clone this repository
2. Connect your GitHub repo to Railway.app
3. Railway will auto-detect the configuration
4. Deploy!

Railway configuration is already set up in `railway.toml`.

## Usage Instructions

1. Allow camera access when prompted
2. Position your face 50-70cm from the camera
3. Ensure good lighting
4. Look directly at the camera
5. Click "Measure IPD" button 3-5 times
6. Copy the averaged WorldRenderer.InterpupillaryDistance value

## How It Works

The app uses MediaPipe Face Landmarker to detect 478 facial landmarks, specifically tracking:
- **Landmark #468**: Left pupil center
- **Landmark #473**: Right pupil center

It calculates 3D Euclidean distance between pupils and converts pixel measurements to real-world millimeters using facial proportions.

## Normal IPD Ranges

- **Children**: 40-55mm
- **Women**: 55-65mm  
- **Men**: 60-72mm
- **Average**: 63mm (game default: 65mm)

## Tech Stack

- **Frontend**: Vanilla JavaScript, HTML5, CSS3
- **AI/ML**: Google MediaPipe Face Landmarker
- **Backend**: Node.js + Express
- **Deployment**: Railway.app

## License

MIT
