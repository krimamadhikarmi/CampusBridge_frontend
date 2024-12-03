const ScheduleList = ({ meeting }) => {
  return (
    <>
      <li className="meeting-item">
        {/* <img src={meeting.imageUrl} alt="" className="flex-none w-10 h-10 rounded-full" /> */}
        <div className="meeting-details">
          <p className="meeting-title">{meeting.title}</p>
          {/* <p className="mt-0.5"> */}
          {/* <time dateTime={meeting.date}>{format(date, 'h:mm a')}</time> */}
          {/* <time dateTime={meeting.endDatetime}>{format(endDateTime, 'h:mm a')}</time> */}
          {/* </p> */}
        </div>
        {/* <Menu as="div" className="relative opacity-0 focus-within:opacity-100 group-hover:opacity-100">
        <div>
          <Menu.Button className="-m-2 flex items-center rounded-full p-1.5 text-gray-500 hover:text-gray-600">
            <span className="sr-only">Open options</span>
            <DotsVerticalIcon className="w-6 h-6" aria-hidden="true" />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95">
          <Menu.Items className="absolute right-0 z-10 mt-2 origin-top-right bg-white rounded-md shadow-lg w-36 ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm',
                    )}>
                    Edit
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm',
                    )}>
                    Cancel
                  </a>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu> */}
      </li>
    </>
  );
};
export default ScheduleList;
