import Frame from "./layouts/frame";
import FirstPage from "./components/first-page/first-page";
import MusicPlayerSlider from "./components/music-player/music-player";
import BlogBlessing from "./components/blog-blessing/blog-blessing";
import Cake from "./components/cake/cake";

function App() {
  return (
    <>
      <Frame>
        <FirstPage />
      </Frame>

      <Frame>
        <MusicPlayerSlider />
      </Frame>

      <Frame>
        <BlogBlessing />
      </Frame>

      <Frame>
        <Cake />
      </Frame>

      <Frame>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus animi omnis ullam non esse. Rerum beatae maiores
          officia at! Amet error pariatur temporibus incidunt provident deserunt
          illum est odit ducimus!
        </div>
      </Frame>
    </>
  );
}

export default App;
