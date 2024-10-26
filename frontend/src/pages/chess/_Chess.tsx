// import { useEffect, useState, useContext } from "react";
// import { chessBoxes as chessBoxesImport } from "./lib/chessBoxes";
// import ChessBox from "./components/ChessBox";
// import { intialState } from "./lib";
// import UserContext from "@/context/UserContext";
// import { useParams } from "react-router-dom";
// import useSocket from "@/hooks/useSocket";

// const Chess = () => {
//   const [chessBoxes, setChessBoxes] = useState(chessBoxesImport);
//   const { id } = useParams<{ id: string }>();
//   useEffect(() => {
//     setChessBoxes([...intialState(chessBoxes)]);
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   const { session } = useContext(UserContext);
//   const { game, socketHandler } = useSocket();
//   useEffect(() => {
//     if (!id) return;
//     if (!game) {
//       socketHandler?.joinGame(id);
//     }
//   }, [game, id, socketHandler]);

//   const [toggle, settoggle] = useState(false);

//   function copy() {
//     if (!id) return;
//     navigator.clipboard.writeText(id);
//     settoggle((prev) => !prev);
//     // TODO: clear the timeout
//     setTimeout(() => {
//       settoggle((prev) => !prev);
//     }, 3000);
//   }

//   if (!session) return <div>loading...</div>;
//   if (!game) return <div>loading...</div>;

//   return (
//     <div className="container min-h-screen flex flex-col justify-center">
//       <div className="text-center mb-10 flex justify-center items-center gap-5">
//         <h1>
//           <span className="text-green-gradient"> Lobby Code</span> :{" "}
//           <span className=" border-2 border-zinc-900 p-2">{id}</span>
//         </h1>
//         <button onClick={copy} className="border-2 border-zinc-900 py-1 px-2">
//           {!toggle ? (
//             <i className="fa-solid fa-copy"></i>
//           ) : (
//             <i className="fa-solid fa-check"></i>
//           )}
//         </button>
//       </div>
//       <div className="flex flex-col items-center lg:w-1/2 md:w-3/5 sm:w-4/5 w-full sm:mx-auto">
//         <div className="flex w-full justify-between">
//           <div className="flex flex-row w-full gap-5 mb-2 items-center">
//             <img src={game.player1.avatar} className="rounded-full h-[40px]" />
//             {game.player1.name}
//           </div>
//         </div>
//         <div className="w-full ">
//           {[...chessBoxes].reverse().map((row, parentIndex) => {
//             return (
//               <div className="grid grid-cols-8 " key={parentIndex}>
//                 {row.map((col, index) => (
//                   <ChessBox
//                     key={index}
//                     parentIndex={parentIndex}
//                     index={index}
//                     col={col}
//                   />
//                 ))}
//               </div>
//             );
//           })}
//         </div>
//         <div className="flex flex-row w-full gap-5 mt-2 justify-end items-center">
//           {game.player2?.name}
//           <img src={game.player2?.avatar} className="rounded-full h-[40px]" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Chess;
