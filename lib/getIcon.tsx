type Name = 'arrowLeft' | 'arrowRight';

const getIcon = (name: Name) => {
  switch (name) {
    case 'arrowLeft':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-arrow-big-left-icon lucide-arrow-big-left"
        >
          <path d="M18 15h-6v4l-7-7 7-7v4h6v6z" />
        </svg>
      );

    case 'arrowRight':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-arrow-big-right-icon lucide-arrow-big-right"
        >
          <path d="M6 9h6V5l7 7-7 7v-4H6V9z" />
        </svg>
      );

    default:
      return;
  }
};

export default getIcon;
