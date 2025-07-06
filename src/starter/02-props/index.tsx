// function Component({ name, id }: { name: string; id: number }) {
//   return (
//     <div>
//       <h2>Name:{name}</h2>
//       <h2>Id:{id}</h2>
//     </div>
//   );
// }
// export default Component;

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

type ComponentProps = {
  name: string;
  id: number;
  children?: React.ReactNode;
};

function Component(props: ComponentProps): JSX.Element {
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <h3>Id:{props.id}</h3>
      <div>{props.children}</div>
    </div>
  );
}

export default Component;
