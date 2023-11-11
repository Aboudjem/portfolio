interface IProps {
  text: string;
  link: string;
  icon: React.ReactElement;
}

function SocialLink({ text, link, icon }: IProps) {
  return (
    <a
      href={link}
      className="group-hover:bg-new-500 flex items-center justify-center space-x-3 rounded-xl border border-dashed border-[#3A3E4E] bg-[#0A1429] p-8 transition-all group-hover:border-transparent"
    >
      {icon}
      <span className="group-hover:text-interface-100 text-2xl font-semibold text-white transition-all">
        {text}
      </span>
    </a>
  );
}

export default SocialLink;
