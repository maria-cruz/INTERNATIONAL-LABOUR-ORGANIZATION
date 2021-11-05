import DownloadGuide from "@modules/DownloadGuide";
import axios from "axios";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import getStrapiFileUrl from "@common/utils/getStrapiFileUrl";
interface UnitType {
  unit: string;
  title: string;
  description: string;
  thumbnail: any;
}

interface FileType {
  url: string;
}
interface GuidesDataType {
  unit: UnitType;
  file: FileType;
}

interface AllGuidesDataType {
  data: GuidesDataType[];
}
export const getServerSideProps: GetServerSideProps = async () => {
  const { data: allDownloadData }: AllGuidesDataType = await axios.get(
    `${process.env.API_URL}/guides`
  );

  const sortedAllDownloadData = allDownloadData.sort((a, b) => {
    if (a?.unit?.unit > b?.unit?.unit) {
      return 1;
    }
    if (a?.unit?.unit < b?.unit?.unit) {
      return -1;
    }
    return 0;
  });

  let allGuidesData = sortedAllDownloadData.map((guideData) => {
    const guideUnit = guideData?.unit?.unit;
    const guideTitle = guideData?.unit?.title;
    const guideDescription = guideData?.unit?.description;
    const guideThumbnail = getStrapiFileUrl(guideData?.unit?.thumbnail?.url);
    const guideFile = getStrapiFileUrl(guideData?.file?.url);
    const isUnitMissing = !guideUnit;
    if (isUnitMissing) {
      return null;
    }
    return {
      unit: `Unit ${guideUnit ?? 0}`,
      title: guideTitle || "",
      description: guideDescription || "",
      thumbnail: guideThumbnail,
      url: guideFile,
    };
  });

  allGuidesData = allGuidesData.filter((guideData) => !!guideData);

  return {
    props: { allGuidesData },
  };
};

const DownloadGuidePage = ({
  allGuidesData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return <DownloadGuide allGuidesData={allGuidesData} />;
};
export default DownloadGuidePage;
