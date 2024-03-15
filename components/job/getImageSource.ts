function getRandomImage(num: number) {
  const randomIndex = Math.random() < 0.5 ? 0 : 1;
  const images1 = ['healthyCare', '1'];
  const images2 = ['building2', '7'];
  return num === 1 ? images1[randomIndex] : images2[randomIndex];
}

const getImageSource = (code: string) => {
  switch (code) {
    case '550104':
      return getRandomImage(1);
    case '231100':
      return '2';
    case '561101':
    case '561100':
      return getRandomImage(2);
    case '029400':
      return '6';
    case '531203':
    case '232902':
      return 'kindergarden';
    case '232904':
      return '3';
    case '027200':
      return 'officeJob';
    case '232904':
      return '7';
    case '029101':
      return 'carService';
    default:
      return 'office'; // Default image if code doesn't match
  }
};

export default getImageSource;
