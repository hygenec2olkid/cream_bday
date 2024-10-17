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
        <BlogBlessing />
      </Frame>

      <Cake />
    </>
  );
}

export default App;
