import React from 'react';
import VideoListItem from './video_list_item';

// for 대신에 map을 이용
// map은 함수를 반환 
// array.map(function(number) {return number * 2});
// 에러 메세지: Each child in an array or iterator should have a unique "key" prop. Check the render method of `VideoList`. => 배열의 각 자식은 특별한 키 prop을 가져야 한다.
const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return (
      <VideoListItem 
        onVideoSelect={props.onVideoSelect}
        key={video.etag} 
        video={video} />
    )
  });
  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
};

export default VideoList;