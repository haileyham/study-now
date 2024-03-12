export default async function jobOpeningAPI() {
  const apiKey = process.env.NEXT_PUBLIC_SEOUL; //추후 변경예정  dynamic 배포제한 때문에 일단 public으로 함ㅠㅠ
  try {
    const response = await fetch(
      `http://openapi.seoul.go.kr:8088/${apiKey}/json/GetJobInfo/1/16/`,
    );
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      const errorRes = await response.json();
      console.error('Error:', errorRes);
      throw new Error('Failed to fetch data');
    }
  } catch (error) {
    console.error('Error', error);
    throw error;
  }
}
