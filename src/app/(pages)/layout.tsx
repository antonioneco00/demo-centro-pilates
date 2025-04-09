import Breadcrumb from "@/components/Breadcrumb";

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="w-full bg-indigo-100 py-18">
        <Breadcrumb />
      </div>
      {children}
    </>
  );
}
