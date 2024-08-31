/**
 * Alert Component
 * 
 * This functional component renders an alert message on the screen. 
 * The alert can be of type 'danger' (for errors) or 'success'.
 * It is styled accordingly based on the type and displays a message provided via props.
 * 
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.type - The type of alert, either 'danger' for errors or 'success'.
 * @param {string} props.text - The text message to be displayed in the alert.
 * 
 * @returns {JSX.Element} The rendered alert component.
 */
const Alert = ({ type, text }) => {
    return (
      <div className='absolute top-10 left-0 right-0 flex justify-center items-center'>
        <div
          className={`p-2 ${
            type === "danger" ? "bg-red-800" : "bg-blue-800"
          } items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex`}
          role='alert'
        >
          <p
            className={`flex rounded-full ${
              type === "danger" ? "bg-red-500" : "bg-blue-500"
            } uppercase px-2 py-1 text-xs font-semibold mr-3`}
          >
            {type === "danger" ? "Failed" : "Success"}
          </p>
          <p className='mr-2 text-left'>{text}</p>
        </div>
      </div>
    );
  };
  
  export default Alert;
  