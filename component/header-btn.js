import Link from "next/dist/client/link";

const HeaderButton =({children, link}) => {
 return (
<Link href={link}>
  <a className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
    {children}
  </a>
</Link>
);
}

export default HeaderButton