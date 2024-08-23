import { SkeletLine } from "./Skelet";

const Page404 = (): JSX.Element => {
  return (
    <div>
      <SkeletLine $size={50} style={{ width: "100px", marginBottom: "30px" }} />
      <div className="grid grid-2">
        <SkeletLine $size={300} />
        <div>
          <SkeletLine $size={30} />
          <SkeletLine />
          <SkeletLine />
          <SkeletLine />
          <SkeletLine />
        </div>
      </div>
    </div>
  );
};

export default Page404;
