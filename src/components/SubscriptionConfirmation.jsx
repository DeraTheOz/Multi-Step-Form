function SubscriptionConfirmation() {
  return (
    <div className="bg-white shadow-primary rounded-[0.63rem] -mt-16 flex flex-col justify-center items-center px-4 pt-10 pb-5 row-start-2 col-start-1 col-end-4 mx-2 lg:shadow-none lg:rounded-none lg:row-start-1 lg:col-start-2 lg:m-0 lg:p-0 lg:mx-16 md:h-[32.5rem] h-[25rem] mb-20">
      <div className="max-w-[28rem] flex flex-col items-center justify-center space-y-6 text-center">
        <img src="/images/icon-thank-you.svg" alt="Icon thank you" />
        <h3 className="md:text-[2rem] text-2xl font-bold">Thank you!</h3>
        <p className="text-light-gray leading-[1.56rem] text-pretty">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </div>
    </div>
  );
}

export default SubscriptionConfirmation;
