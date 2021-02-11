import React from "react";

const HomePage = () => (
  <>
    <h1 className="border border-secondary p-3 mb-3">
      A Blog with a bunch of web developer resources.
    </h1>
    <div className="bg-white p-3">
      <h4 className="mb-2">
        As a self-taught programmer, the internet has become like an apple
        garden.
      </h4>

      <p>
        Not every video tutorial or course has the nuanced information that can
        be found in a written article. Plus, there is the benefit of having the
        static usefulness of written text, which is great for studying,
        referencing, and copy-pasting.
      </p>
      <p>
        While making a bookmarks folder may be easier, why not just friggin put
        it all on one blog? Think of this as like a preview to the full website
        you may or may not visit.
      </p>
      <p>You can visit each articles' source by clicking on its title.</p>
    </div>
  </>
);

export default HomePage;
