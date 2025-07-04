function Component({ name, id }: { name: string; id: number }) {
  return (
    <div>
      <h2>Name:{name}</h2>
      <h2>Id:{id}</h2>
    </div>
  );
}
export default Component;


// type Props = {
//   name: string;
//   id: number;
// };

// function Component(props: Props): JSX.Element {
//   return (
//     <div>
//       <h2>Name: {props.name}</h2>
//       <h2>Id: {props.id}</h2>
//     </div>
//   );
// }

// export default Component;
