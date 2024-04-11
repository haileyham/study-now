// function getRandomImage(num: number) {
//   const randomIndex = Math.random() < 0.5 ? 0 : 1;
//   const images1 = ['healthyCare', '1'];
//   const images2 = ['building2', '7'];
//   return num === 1 ? images1[randomIndex] : images2[randomIndex];
// }

const getImageSource = (code: string) => {
  switch (code) {
    case '550104':
      return '1.JPG';
    case '231100':
      return '2.jpg';
    case '561101':
    case '561100':
      return '7.JPG';
    case '550100':
      return 'healthyCare.JPG';
    case '029400':
      return '6.JPG';
    case '531203':
    case '232902':
      return 'kindergarden.JPG';
    case '232904':
      return '3.JPG';
    case '027200':
      return 'officeJob.jpg';
    case '232904':
      return '7.JPG';
    case '029101':
      return 'carService.JPG';
    default:
      return 'office.jpg'; // Default image if code doesn't match
  }
};

export default getImageSource;
