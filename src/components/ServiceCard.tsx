export const ServiceCard = ({ icon, title, description }: any) => (
  <div className="bg-white border-b-4 border-primary p-3  space-y-5 rounded-3xl">
    <div className="flex flex-row py-4 px-4 items-center space-x-5 border-b-[0.8px] border-gray-900">
      <div className="mb-2">{icon}</div>
      <h3 className="text-xl font-bold mb-1">{title}</h3>
    </div>
    <p className="text-base text-gray-600 p-3 pb-8">{description}</p>
  </div>
);
