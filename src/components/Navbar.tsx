import React from "react";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { TiMicrophone } from "react-icons/ti";
import { BsYoutube, BsCameraVideo, BsBell } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoAppsSharp } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { changeSearchTerm, clearSearchTerm, clearVideos } from "../store";
import { getSearchPageVideos } from "../store/reducers/getSearchPageVideos";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const searchTerm = useAppSelector((state) => state.youtubeApp.searchTerm);
  const handleSearch = () => {
    if (location.pathname !== "/search") navigate("/search");
    else {
      dispatch(clearVideos());
      dispatch(getSearchPageVideos(false));
    }
  };

  return (
    <div className="flex justify-between items-center  px-14 h-14 bg-[#212121] opacity-95 sticky top-0 z-50">
      <div className="flex gap-8 items-center text-2xl">
        <div>
          <GiHamburgerMenu />
        </div>
        <Link to="/">
          <div className="flex gap-1 items-center justify-center">
            <BsYoutube className="text-3xl text-red-600" />
            <span className="text-xl font-medium">YouTube</span>
          </div>
        </Link>
      </div>
      <div className="flex items-center justify-center gap-5">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch();
          }}
        >
          <div className="flex bg-zinc-900 items-center h-10 px-4 pr-0">
            <div className="flex gap-4 items-center pr-5">
              <div>
                <AiOutlineSearch className="text-xl" />
              </div>
              <input
                type="text"
                className="w-96 bg-zinc-900 focus:outline-none border-none"
                value={searchTerm}
                onChange={(e) => dispatch(changeSearchTerm(e.target.value))}
              />

              <AiOutlineClose
                className={`text-xl cursor-pointer ${
                  !searchTerm ? "invisible" : "visible"
                }`}
                onClick={() => dispatch(clearSearchTerm())}
              />
            </div>
            <button className="h-10 w-16 flex items-center justify-center bg-zinc-800">
              <AiOutlineSearch className="text-xl" />
            </button>
          </div>
        </form>
        <div className="text-xl p-3 bg-zinc-900 rounded-full">
          <TiMicrophone />
        </div>
      </div>
      <div className="flex gap-5 items-center text-xl">
        <BsCameraVideo />
        <IoAppsSharp />
        <div className="relative">
          <BsBell />
          <span className="absolute bottom-2 left-2 text-xs bg-red-600 rounded-full px-1">
            9+
          </span>
        </div>
        <img
           src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAsJCQcJCQcJCQkJCwkJCQkJCQsJCwsMCwsLDA0QDBEODQ4MEhkSJRodJR0ZHxwpKRYlNzU2GioyPi0pMBk7IRP/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/wAARCAC0AKgDASIAAhEBAxEB/8QAHAABAAMAAwEBAAAAAAAAAAAAAAUGBwMECAIB/8QATRAAAQQBAgMEBAcJDAsAAAAAAQACAwQFBhESITEHE0FRFCJhcRcyNkKBlNIWIyRSVFV1oeEVM2JygpGTtMLR09QmNFNkdJKxs8Hw8f/EABoBAQADAQEBAAAAAAAAAAAAAAAEBQYHAwH/xAAtEQEAAQMCAggHAQEAAAAAAAAAAQIDBAURMdESExQhMkFRYQZxgZGhsfDxIv/aAAwDAQACEQMRAD8AyJERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQERfbI5JOPu2Pf3bHSP4QTwsbtu523ghwfCIiAiIgIiICIiAiIgIiICIiAiIgIiICIiD9aC4hrQS5xAAA3JJ6ABaLgsOzG1D3zGutWWj0kO2cGsI/efLYfO8z7lD6Ww/EW5Sy3k0kU2OHVw5GUj2dG+3n4c7gtPpOF0Y6+5HfPDmw3xBqnSq7Lanujj8/T6fv5M6z+IdjLXFECadgufXd14D1MTj5jw8x+qGWrXqdfIVZqk/xJAC1wG7o5B8V7fd+zxWY3KlijZmqzt4ZIncJ8nDqHNPkeoVbqWF2evpU+Gfx7cl1omp9stdXcn/un8x683XREVUvxERAREQEREBERAREQEREBERAUtg8S/KWw1wIqw7PsvHl4RtPm7+8+HOPq1p7diCtA3ilmeGMHh5kk+Q6n3LTcdQgxtSKrFseH1pX7bGWUj1nn/x7ArTTsPtFzpVeGP7ZRa1qUYVro0eOrh7e/J2mtZG1kbGhrGNaxjWjZrWtGwAHsX0vxQWXy1+O02hiYXz2arH3sj3bC8MggaZHRu26ADm8+4dVq7+RRjUdOvg59iYl3Nu9Xb754p5QeocQMlW76Bu92s0mPbrNEPWMR9vi3+bx5SlK3Xv1oLUBJjlHQ7cTHDk5jvaP2+K7CXLdGTa6M98SWb13BvxXT3VUz/RLIDuCQeqK1apw4he7J1mDuZnfhTWjlHK48ngeTvH2/wAZVVYjIsVY9ybdTqeHlUZdmL1vz/E+giIo6WIiICIiAiIgIiICIiAmyKzaYw/pUov2Gfg8D/vDXDlNM3x5/Nb/ANfcV72LNV+5FujzRcvKoxLU3rnCPz7JrTeH9Ar+lTt/C7LByI5wwnmGe89XfQPDnPIuOexXqwT2rDuCCBnHIR1PgGt9pPILcWrVGNaimOEOV5N+7m35uVd81eX6iHSzOUGLq8UezrtgmOnHtuePoZCPJvh5nb6LzoPSpwGPfbvN4s1k2iW6554nwsJL219z4893+Z8w0FVbQeCnz+Sfq7LRD0WCQx4aBw3YZInECQb8uGM7hp8Xbnlwc9bWQz8ucm5vHhjg6NpOnRg2dp8c8eX0Y1qLEnRma9JgYRpvMy/FaPUo2uZLBt4dS3+DuOfd7nt7g7EEEEAgg7gg8wQQtLy+Ko5rHXMbdZxQWYy0kfHjeObJYz+M07Ee7yPPHKIv4bIWtMZX/WahPoE3RlmufWbwE+G3Nv0jq3ZT9JzejPUV8J4clR8QaZ1lParUd8cfl6/T9fJLSMiljkilYHxStcyRjujmuGxBWbZnFy4q26I7ugk3kqyH58e/Q+0dD+1aWullMdDk6klaTZrxu+vIR+9ygcj7j0P7Fbahhxk296fFHDkoNG1KcK9tV4KuPNlyLkngmrTTQTMLJYnujkaeoc07LjWLmNp2l02JiY3gREXx9EREBERARFJ4HET53L43Fw7g2p2tkeBv3ULfXkk58vVaCf8A6g0fQegMLlML+6ecqySvuzOdSYJp4eCtHuzjIjc07uO/XfkAR8ZWz4M9AfmyX67d/wARW2vXgqV61WvGI4K0McEEbejIo2hjWj3ABcqDzHlsGzDagu4i9OYa9eyQLDmucXVXDvI5A1gPNzSPp9ytMOe0tXiighuNZFEwMjaILPJo/kfzq39o1K7Qdh9YYwBt3DzNgtHh4mvqyuIb3g/FBJafZJ7FbsDlsZqDF1MnTYwMmaRLGQ0vgmbyfE/l1B9nMEHoVOxc2rF36ERvPr/qrz9Mt5+3W1TER5Rt9+Esm+6PTn5e3+gs/YVfy2axmTyFKrNNZbg68rX2X1YwbE529Z0bJS0b/Nbv03J2O+y3HC6VwWBny9ijABJkrBmdxhpEEXxhBCNuTAdz9I/FG1J7TNURQcGmaBaJp3Qvyz2AAxwlzZGVtxz3dyc/2bDnxnb1yNTvZFHV1bRHt/qPh6HjYl2L1MzMxw325Q7lbtU0LTr16tahmIq9eNkMMbK1UNZGwcIaPwhcvwuaO/JM19Xq/wCYWg93F/s2dfxQvMurvlRqn9L3/wDvOVYvGs/C7o78kzX1er/mFU9aav0bqWrVlpw5WvmKDw+lYkr12tLS4F0UjmTF23zm8jsR/CO8p2NtY5mrOJrTs7E7bgHwteasvaPSF3C4uiwside1BiqgkLRwsMxkjDnAbchunAmN+5ntHU+JlqwvuziC0BwzM7qVzS4fPaWNI2PX/wB59n7o9Ofl7f6Cz/hrVcNpfTmCrxQUaEHG1obJZmYyS1M4Dm6SVw359dhsBvyAUjamp0oX2J43mNpAd6PVmsv5+Pd1mOft5+qrmnWb9MRG0T9+bNV/DeJXVNUTVG/lExyeeNR2NP5BjLdS2112PhjewQzt7+PfYc3MA3b7+nuWldnmB05f0tjrN3EY2zYfPdD5rNSCWVwbO5oBe9pPIcgpt2vOz6NzmSZSON7CWuZLSuxvafJzXwg/qXX7M/khjD/vGQ/rL1W5F6b9c3JiImfRd4mNGLaizTVMxHDf+hwa009pinpfUFirhcXBYirMdFNBTrskYe9jG7HtbuD9Kx/SFeta1Np6vZhinglvRslimY18b27Hk5rgQQvRWZxcGaxl/FzyyxRXI2xvkh4e8aA9r/V4wR4eSqWJ7McFiMlj8nBkMjJLTnbOxkpr8DiARs7hjB/WvBKWT7lNHcv9H8N9QrfYWKdpVLH4/Upr0alarB6BTf3VWJkMfEeMF3DGANz4r0IsD7VflU79G0v7aChoiIC2XskwPc1b2oJ2ffLZdSok+EEbgZZB/GcA3+QfNY0tEo9qmUx1OlQq4fGMr1IIq8LeKyTwRt4QSePqepKDcpJI4o5JZXtZHGx0kj3HZrGNBc5xPkFTNC6tOpTqGOZxEtfIS2KjHAAjHTuPcs5dSzYgn2hZ3l+1DPZbG38aaVKs27Ca8ssDpjIInEcbRxuI9YbtPLoT9FZ05qG/prJNyVNkcjzDLXlim4hHLHJsdncBB5EAj3IPS92nWyFS5RtM469uCWvM3luWSNLTsT4+IWRdn37r4DWGX0zM8mBzbQnY4ENc+u3jisRg9OJpHvDh5Dbh+GHPfmrG/wDNZ+2og9oFp2oq2pHYmiLcVKSlIyKSZjJg4ENe8kk7gcvd7uQbpmLc1DE5q9CGmaljb1uIPG7DJDC+RocB4bjmvLc1mzYsy255HS2JpnTyySHdz5XO4y5x9pWh5DtXyOQx+SoOxFSNt6nZpue2eVxY2eN0RcAW7ct1myD1Th8tQzeOp5KlI18NiNriAQXRS7DjikHg5p5H+47nMNVdmWdv5jIZLFWKksN+w+y+KzI6KWGWQ8TwDwlpbvuRzB57bctznOG1BnsBM6bFXZa5ft3sfJ8EoHId5E8Fh28DtuN+RCvEHbBn2MAsYvGyvAA4onWId/aWlzkF60HpGzpWnf8ATLEUtzIPgdM2vxGGJkAeGNa54BJ9YknYeXhu6J7TshFZjwWmqcrTl72VpSsaH8PcAl0UZkcOYLnOG3sBPvp2R7VtXXI3RVGUse1wIMleN0k+x5EB85c0fQwH2qnVMnar5Wll5nPtWa9+vfebEj3OnkilbL98kO7ue3MoN3w83ajShZBlcdisl3Yaxs7Mh6NZIHLeQ905jj9DfafFW+B80kMT5oTDK5gMkRe2Tu3eLeNnIrHfhiyf5kp/WZvsp8MWT/MtP6zN9lBpuoMDgc5RsxZSGHZkMjmWyGtmqENJ71kvUAdSN9jtzBChOzL5H4v/AIjIf1l6yzUHaHqbP15KTjBSoyDhmhpB4dM38WWV5LiPMDYHxBXUxOuNW4WjDjsfbijqwukdGx1WvIQZHmR27ntJ6k+KDdNY3LlDTOeuU5nwWYKzXwyx7cTHGVjdxv7ysk0nq7V97UmAqW8xbmrT3WMmieWcL2kO5O2aonI6+1jlaVrH3bsL6tpgjmY2rXYXNDg7k5rQfBQGPv3MZdqX6b2stVZBLC5zGvDXAEblrwR+pB6u8vcsD7VflU79G0v7a6/wna+/OEH1Kp9hVzMZrKZ656fkpWy2e6jh4mRsjHAzfYcMYA8SgjkREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQf//Z"
          className="w-9 h-9 rounded-full"
          alt="pogo"
        />
      </div>
    </div>
  );
}
