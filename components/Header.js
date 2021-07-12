import Icon from '@material-tailwind/react/Icon';
import Button from '@material-tailwind/react/Button';

function Header() {
  return (
    <div className="sticky top-0 shadow-md bg-white items-center py-2 px-4 flex">
      <Button
        color="gray"
        buttonType="filled"
        size="regular"
        rounded={true}
        block={false}
        iconOnly={true}
        ripple="light"
        className="hidden h-20 w-20 border-0 md:inline-flex"
      >
        <Icon name="menu" size="3xl"></Icon>
      </Button>
      <Icon name="description" size="5xl" color="blue"></Icon>
      <h1 className="ml-2 text-gray-700 text-2xl">Docs</h1>

      <div className=" mx-5 bg-gray-100 flex flex-grow px-5  py-3 items-center rounded-lg text-gray-700">
        <Icon name="search" size="2xl"></Icon>
        <input
          placeholder="Search"
          type="text"
          className="flex-grow bg-transparent outline-none px-5"
        ></input>
      </div>

      <Button
        color="gray"
        buttonType="filled"
        size="regular"
        rounded={true}
        block={false}
        iconOnly={true}
        ripple="light"
        className="hidden h-20 w-20 border-0 md:inline-flex"
      >
        <Icon name="apps" size="3xl" color="gray"></Icon>
      </Button>
    </div>
  );
}

export default Header;
