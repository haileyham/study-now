const extractDistrict = (address: string) => {
  const reg = /서울 ..*구/;
  const match = reg.exec(address);
  return match;
};

export default extractDistrict;
