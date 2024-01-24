import React, { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [likeClicked, setLikeClicked] = useState(false);

  const toggle = () => {
    setLikeClicked(!likeClicked);
    onClick();
  };

  if (likeClicked)
    return (
      <AiFillHeart
        onClick={() => setLikeClicked(false)}
        color="#ff6b81"
        size={20}
      ></AiFillHeart>
    );
  return <AiOutlineHeart size={20} onClick={toggle}></AiOutlineHeart>;
};

export default Like;
