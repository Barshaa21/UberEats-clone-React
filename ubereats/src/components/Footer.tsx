export default function Footer() {
  return (
<footer className="footer flex flex-col  gap-12 lg:flex-row mt-[8rem] lg:justify-between px-12 ">
  <div className="apps flex gap-[3 rem]  text-[1.9em] gap-x-8 lg:text-[1.3em]">
    <i className="fa-brands fa-facebook"></i>
    <i className="fa-brands fa-twitter"></i>
    <i className="fa-brands fa-instagram"></i>
  </div>
  <div className=" div-6-list toggle cursor-pointer text-[1.7em] leading-10 list-none lg:flex lg:gap-3 lg:text-[1.1em]">
    <li>Privacy Policy</li>
    <li>Terms</li>
    <li>pricing</li>
    <li>Do not sell or share my personal information</li>
</div>
</footer>
  )
}
