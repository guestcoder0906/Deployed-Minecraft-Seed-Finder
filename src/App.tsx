/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function App() {
  return (
    <div className="w-screen h-screen overflow-hidden bg-black">
      <iframe
        src="https://slinkyferret-mc-SeedFinder.hf.space"
        className="w-full h-full border-none"
        title="Minecraft Seed Finder"
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-downloads"
      />
    </div>
  );
}
