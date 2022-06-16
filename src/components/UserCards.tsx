type UserCardsProps = {
  UserList: {
    user: string;
    location: string;
    tags: string[];
    avatar: string;
  }[];
};

function UserCards({ UserList }: UserCardsProps) {
  return (
    <div className="flex flex-wrap justify-center  w-full mt-16">
      {UserList.map((item, index) => (
        <div
          key={index}
          className="flex flex-row w-80 h-52 rounded-2xl p-6 bg-white m-2 transition ease-in-out duration-300 hover:shadow-lg select-none cursor-pointer"
        >
          <div className="w-24 h-24 mr-4">
            <img src={item.avatar} alt={item.user} />
          </div>
          <div className="font-sans mt-5">
            <h1 className="font-black text-lg">{item.user}</h1>
            <p className="font-medium text-sm my-1">{item.location}</p>
            <div className="flex flex-wrap w-40 mt-4">
              {item.tags.map((tag, index) => (
                <span
                  className="font-medium text-xs text-indigo-400 rounded-xl border border-indigo-400 py-0.5 px-2 m-px"
                  key={index}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default UserCards;
