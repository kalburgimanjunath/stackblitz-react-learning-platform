import React, { useState } from 'react';
function index() {
  return (
    <div>
      <h1>Social Share</h1>
    </div>
  );
}
const PostCard = ({ data }) => {
  return (
    <div>
      <div></div>
      <div>
        <div>{data.title}</div>
        <div>{data.description}</div>
        <div>
          {data.tags &&
            data.tags.map((item) => {
              return <span>{item}</span>;
            })}
        </div>
      </div>
    </div>
  );
};
function SocialShare() {
  const [title, SetTitle] = useState();
  const [description, SetDescription] = useState();
  const [image, SetImage] = useState();
  const [tags, SetTags] = useState([]);
  const data = {
    title: 'Post title',
    description: 'Post description',
    image: '',
    tags: ['posts', 'description'],
  };
  return (
    <div className="social">
      <div className="social-form">
        {/* <h1>Social Share</h1> */}
        <div>
          <div>
            <div>Title</div>
            <div>
              <input type="" />
            </div>
          </div>
          <div>
            <div>Description</div>
            <div>
              <input type="" />
            </div>
          </div>
          <div>
            <div>Image</div>
            <div>
              <input type="" />
            </div>
          </div>
          <div>
            <div>Tags</div>
            <div>
              <input type="" />
            </div>
          </div>
          <div className="button-footer">
            <div>
              <button type="button">Save</button>
            </div>
          </div>
        </div>
      </div>
      <div className="social-preview">
        <h3>Preview</h3>
        <PostCard data={data} />
      </div>
    </div>
  );
}

export { SocialShare };
