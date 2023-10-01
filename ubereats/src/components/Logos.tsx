export default function Logos() {
  return (
    <div className="logos flex lg:w-[50%] lg:flex-col lg:gap-[10rem] ">
      <div>
        <img
          className="hidden lg:block lg:h-[4rem]"
          src="https://cdn.picodi.com/za/shop/thumb_200/ubereats_571_001_4.png"
        />
      </div>
      <div className="flex">
        <img
          className="h-[4.5rem] w-[18em] mr-[2em] lg:h-[3rem] lg:w-[9rem]"
          src="https://1000logos.net/wp-content/uploads/2020/08/apple-app-store-logo.jpg"
        />
        <img
          className="h-[4.5rem] w-[15em] mr-[2em] lg:h-[3rem] lg:w-[9rem]"
          src="https://miro.medium.com/v2/resize:fit:1358/1*2alJy6-zxpN9vT2VBGu0qw.png"
        />
      </div>
    </div>
  );
}
