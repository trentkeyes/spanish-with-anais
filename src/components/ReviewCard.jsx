const ReviewCard = () => {
  return (
    <div className="mb-24 shadow-sm rounded-lg w-1/2 border-green-500 my-8 border-4 p-4 lg:w-2/3 mx-auto">
      <p className="font-bold text-lg mb-6">
        Anais is an excellent teacher and so patient. Thank you for your help!
      </p>
      <div className="flex gap-4">
        <img
          className="w-12 object-cover object-right overflow-hidden rounded-full"
          src="/src/assets/pexels-tim-douglas-6205523.jpg"
          alt="Woman smiling"
        />
        <div>
          <h3 className="text-lg">Rini Ng</h3>
          <h4 className="text-lg">Dallas, Texas</h4>
        </div>
      </div>

      {/* <p>
      I love having Anais as my teacher :) She is so good at asking me
      questions, corrects me when needed, and helps me learn about things that
      apply in my day-to-day life.
      </p> */}
    </div>
  );
};

export default ReviewCard;
