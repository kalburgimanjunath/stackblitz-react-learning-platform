import React, { useState, useEffect } from 'react';
function index() {
  return (
    <div>
      <h1>Social Share</h1>
    </div>
  );
}
const PostCard = ({ data }) => {
  return (
    <div className="post-card">
      <div className="post-container">
        <div className="post-image">
          <img
            src={
              data.image
                ? data.image
                : 'https://picsum.photos/seed/picsum/200/300'
            }
          />
        </div>
        <div className="post-desc p-20">
          <h5>{data.title}</h5>
          <div>{data.description}</div>
        </div>
      </div>
      <div className="post-tags">
        {data.tags &&
          data.tags.map((item) => {
            return <span>{item}</span>;
          })}
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
  const [formData, setFormData] = useState([]);
  useEffect(() => {
    setFormData({
      title: title,
      description: description,
      image: image,
      tags: tags,
    });
  });

  return (
    <div className="social">
      <div className="social-form">
        {/* <h1>Social Share</h1> */}
        <div>
          <div>
            <div>Title</div>
            <div>
              <input type="text" onChange={(e) => SetTitle(e.target.value)} />
            </div>
          </div>
          <div>
            <div>Description</div>
            <div>
              <input type="" onChange={(e) => SetDescription(e.target.value)} />
            </div>
          </div>
          <div>
            <div>
              Media <span> or Choose from Library</span>
            </div>
            <div>
              <input type="file" onChange={(e) => SetImage(e.target.value)} />
            </div>
          </div>
          <div>
            <div>Tags</div>
            <div>
              <input
                type="text"
                onChange={(e) => SetTags(e.target.value)}
                value={['posts', 'description']}
              />
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
        <PostCard data={formData} />
      </div>
    </div>
  );
}

export { SocialShare };
