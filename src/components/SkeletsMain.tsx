import Skelet from "./Skelet";

type SkeletsMainProps = {
  count: 8;
  loading: boolean;
};

const SkeletsMain = (props: SkeletsMainProps): JSX.Element => {
  const { count, loading } = props;

  if (loading) return <></>;

  return (
    <>
      {Array(count)
        .fill(count)
        .map((__, index) => (
          <Skelet key={index} />
        ))}
    </>
  );
};

export default SkeletsMain;
