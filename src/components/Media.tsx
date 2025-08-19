export default function Media() {
  return (
    <section id="media" className="my-8">
      <h2 className="text-2xl font-semibold">Media Showcase</h2>

      <figure className="my-4">
        <video controls width="480" className="mx-auto">
          <source src="sample-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <figcaption className="text-center mt-2">HTML5 Video Example</figcaption>
      </figure>

      <figure className="my-4">
        <audio controls className="mx-auto">
          <source src="sample-audio.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <figcaption className="text-center mt-2">HTML5 Audio Example</figcaption>
      </figure>

      <meter value={0.8} min={0} max={1} className="w-full">80%</meter>
      <p>Storage usage: 80%</p>
    </section>
  );
}
