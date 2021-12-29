import Link from "next/dist/client/link";

const HeaderButton =({children, link}) => {
 return (
<Link href={link}>
  <a className="text-gray-50 hover:bg-gray-700 px-3 py-2 rounded text-xl font-header">
    {children}
  </a>
</Link>
);
}

export default HeaderButton