import List from "./list.js";

// export default function Home() {
//   return (
//     <div>
//       <Image
//         imageData={
//           "https://img.etimg.com/thumb/width-1200,height-1200,imgsize-38950,resizemode-75,msid-107732642/news/international/us/spider-man-4-check-out-latest-updates-on-release-date-cast-plot-production-and-more.jpg"
//         }
//       />
//       <Image
//         imageData={
//           "https://m.media-amazon.com/images/S/pv-target-images/16095d11f5beb5ed48385d19976892a6ea7ad312f8e7e6115fabb6c953d8590e.jpg"
//         }
//       />
//     </div>
//   );
// }

export default function Home() {
  const menuData = [{name:"ice coke"}, {name:"coffee"}, {name:"tea"}];
  return <list menuData={menuData} />;
}
