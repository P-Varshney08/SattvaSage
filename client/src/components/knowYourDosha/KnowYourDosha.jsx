import axios from 'axios';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import DoshaChart from './DoshaChart';

const KnowYourDosha = () => {
    const [doshaData, setDoshaData] = useState(null);

//  const doshaQuestions = [
//     {
//       question: "What is your body frame?",
//       answers: ["Thin and lean", "Moderate and muscular", "Solid and sturdy"],
//     },
//     {
//       question: "How is your digestion?",
//       answers: ["Irregular, prone to bloating", "Strong, but may experience heartburn", "Slow and steady"],
//     },
//     {
//       question: "What is your skin type?",
//       answers: ["Dry, rough, or cracked", "Sensitive, prone to redness or inflammation", "Soft, smooth, and slightly oily"],
//     },
//     {
//       question: "How do you handle stress?",
//       answers: ["Anxious, restless", "Irritable, aggressive", "Calm, slow to anger"],
//     },
//     {
//       question: "What is your sleep pattern?",
//       answers: ["Light sleeper, difficulty falling asleep", "Moderate, can wake up occasionally", "Deep sleeper, can sleep for long hours"],
//     },
//     {
//       question: "How is your hair?",
//       answers: ["Dry, frizzy, or brittle", "Fine or thinning prematurely", "Thick, lustrous, slightly oily"],
//     },
//     {
//       question: "What is your eye shape?",
//       answers: ["Small, dry, or restless", "Sharp, intense, sensitive to light", "Large, attractive, with long lashes"],
//     },
//     {
//       question: "How do you handle finances?",
//       answers: ["Spends impulsively", "Good at managing, but can be extravagant", "Cautious spender, good at saving"],
//     },
//     {
//       question: "What is your preferred climate?",
//       answers: ["Warm and humid", "Hot and dry", "Cool and dry"],
//     },
//     {
//       question: "How is your energy level?",
//       answers: ["Variable, bursts of energy", "High energy, can burn out quickly", "Steady and enduring"],
//     },
//     {
//       question: "How is your memory and ability to learn new things?",
//       answers: ["Quick to learn, but tends to forget easily", "Sharp memory, quick learner", "Steady learner, retains information well"],
//     },
//     {
//       question: "How do you handle change or unexpected situations?",
//       answers: ["Anxious, resistant to change", "Easily frustrated, but adapts quickly", "Calm and adaptable"],
//     },
//     {
//       question: "Which taste do you prefer most in food?",
//       answers: ["Sweet, sour, or salty", "Spicy, bitter, or astringent", "Mild, slightly sweet, or salty"],
//     },
//     {
//       question: "How is your reaction to cold weather?",
//       answers: ["Dislike, feel cold easily", "Enjoy, feel comfortable", "Neutral, neither like nor dislike"],
//     },
//     {
//       question: "What is your preferred leisure activity?",
//       answers: ["Creative pursuits, artistic activities", "Competitive sports or challenges", "Relaxing activities like reading or nature walks"],
//     },
//   ];
  
  const [formData, setFormData] = useState({
    Frame: "", Weight: "", Eyes: "", Complexion: "", Hair: "", SleepPattern: "", Joints: "", BodyTemperature: "", Temperament: "", UnderStress: "", Tolerence: "", Veins: "", Digestion: "", Nails: "", Memory: "",
});

    const user = useSelector((state)=> state.user.userDetails);
    const isLogin = !!user;

const handleChange = (question, value) => {
    setFormData((prevData) => ({
        ...prevData,
        [question]: value,
    }));
};

const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
        if(isLogin) {
            const {_id} = user;
            console.log(_id);
            const res = await axios.post(`http://localhost:8080/api/use/saveDosha`, { _id, ...formData});
            console.log('res.data h ye: ',res.data);
            // console.log(doshaData);
            setDoshaData(res.data);
            // console.log(doshaData);
        }
    } catch (error) {
        console.log(error.message);
        toast.error('Error submitting form');
    }
  };
  
  
  return (
    <div className="bg-gradient-to-r to-[#eceaea] from-[#efeaea] min-h-screen flex items-center justify-center">
      <div className="container mx-auto md:w-4/5 lg:w-2/3 xl:w-[80%] p-1">
        <form onSubmit={handleSubmit}>
          <div className="flex bg-white rounded-lg shadow-md overflow-hidden">
            <div className="w-full md:w-1/2 p-4">
              <img
                src='https://img.freepik.com/free-photo/benefits-ayurvedic-healing-herbs_1340-25630.jpg?ga=GA1.1.966123688.1703420893&semt=ais_ai_generated'
                // src='https://img.freepik.com/free-photo/rendering-wizard-controlling-magic_23-2150608352.jpg?ga=GA1.1.966123688.1703420893&semt=ais_ai_generated'
                alt="Background"
                className="w-full h-full object-cover rounded"
                style={{ margin: 'auto' }}
              />
            </div>
            <div className="w-full md:w-1/2 p-6 md:p-8" style={{ maxHeight: '80vh', overflowY: 'auto' }}>
                <h2 className="text-3xl md:text-3xl font-bold mb-6 text-gray-800" style={{ fontFamily: 'sans-serif' }}>
                    Know your Dosha
                </h2>
              {/* {doshaQuestions.map((q, index) => (
                <div key={index} className="mb-6">
                  <p className="text-lg font-medium text-gray-800">{q.question}</p>
                  <div className="mt-2">
                    {q.answers.map((option, optIndex) => (
                      <label key={optIndex} className="block text-gray-700 mb-2">
                        <input
                          type="radio"
                          name={`question_${index}`}
                          value={option}
                          onChange={() => handleAnswerChange(index, optIndex+1)}
                          className="mr-2"
                        />
                        {option}
                      </label>
                    ))}
                  </div>
                </div>
              ))} */}
              
                    <div className="mb-8">
                        <h2 className="text-xl font-bold mb-2">1. Frame :</h2>
                        <div className="flex flex-col gap-2">
                            <label>
                                <input
                                    type="radio"
                                    onChange={() =>
                                        handleChange("Frame", "Vata")
                                    }
                                    name="Frame"
                                    value="Vata"
                                />{" "}
                                I am thin, lanky, and slender with prominent
                                joints and thin muscles.{" "}
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    onChange={() =>
                                        handleChange("Frame", "Pitta")
                                    }
                                    name="Frame"
                                    value="Pitta"
                                />{" "}
                                I have a medium, symmetrical build with good
                                muscle development.
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    onChange={() =>
                                        handleChange("Frame", "Kapha")
                                    }
                                    name="Frame"
                                    value="Kapha"
                                />{" "}
                                I have a large, round or stocky build. My frame
                                is broad, stout or thick.
                            </label>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-xl font-bold mb-2">2. Weight :</h2>
                        <div className="flex flex-col gap-2">
                            <label>
                                <input
                                    type="radio"
                                    name="Weight"
                                    value="Vata"
                                    onChange={() =>
                                        handleChange("Weight", "Vata")
                                    }
                                />
                                Low; I may forget to eat or have a tendency to
                                lose weight.
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="Weight"
                                    value="Pitta"
                                    onChange={() =>
                                        handleChange("Weight", "Pitta")
                                    }
                                />
                                Moderate; it is easy for me to gain or lose
                                weight if I put my mind to it.
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="Weight"
                                    value="Kapha"
                                    onChange={() =>
                                        handleChange("Weight", "Kapha")
                                    }
                                />
                                Heavy; I gain weight easily and have difficulty
                                losing it.
                            </label>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-xl font-bold mb-2">3. Eyes :</h2>
                        <div className="flex flex-col gap-2">
                            <label>
                                <input
                                    type="radio"
                                    name="Eyes"
                                    value="Vata"
                                    onChange={() =>
                                        handleChange("Eyes", "Vata")
                                    }
                                />
                                My eyes are small and active
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="Eyes"
                                    value="Pitta"
                                    onChange={() =>
                                        handleChange("Eyes", "Pitta")
                                    }
                                />
                                I have a penetrating gaze.
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="Eyes"
                                    value="Kapha"
                                    onChange={() =>
                                        handleChange("Eyes", "Kapha")
                                    }
                                />
                                I have large pleasant eyes.
                            </label>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-xl font-bold mb-2">
                            4. Complexion :
                        </h2>
                        <div className="flex flex-col gap-2">
                            <label>
                                <input
                                    type="radio"
                                    name="Complexion"
                                    value="Vata"
                                    onChange={() =>
                                        handleChange("Complexion", "Vata")
                                    }
                                />
                                My skin is dry, rough, or thin.
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="Complexion"
                                    value="Pitta"
                                    onChange={() =>
                                        handleChange("Complexion", "Pitta")
                                    }
                                />
                                My skin is warm, reddish in color, and prone to
                                irritation.
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="Complexion"
                                    value="Kapha"
                                    onChange={() =>
                                        handleChange("Complexion", "Kapha")
                                    }
                                />
                                My skin is thin, smooth, and moist.
                            </label>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-xl font-bold mb-2">5. Hair :</h2>
                        <div className="flex flex-col gap-2">
                            <label>
                                <input
                                    type="radio"
                                    name="Hair"
                                    value="Vata"
                                    onChange={() =>
                                        handleChange("Hair", "Vata")
                                    }
                                />
                                My hair is dry, brittle, or frizzy.
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="Hair"
                                    value="Pitta"
                                    onChange={() =>
                                        handleChange("Hair", "Pitta")
                                    }
                                />
                                My hair is fine with a tendency towards early
                                thinning or graying.
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="Hair"
                                    value="Kapha"
                                    onChange={() =>
                                        handleChange("Hair", "Kapha")
                                    }
                                />
                                I have abundant, thick, and oily hair.
                            </label>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-xl font-bold mb-2">
                            6. Sleep Pattern :
                        </h2>
                        <div className="flex flex-col gap-2">
                            <label>
                                <input
                                    type="radio"
                                    name="SleepPattern"
                                    value="Vata"
                                    onChange={() =>
                                        handleChange("SleepPattern", "Vata")
                                    }
                                />
                                I am a light sleeper with a tendency to awaken
                                easily
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="SleepPattern"
                                    value="Pitta"
                                    onChange={() =>
                                        handleChange("SleepPattern", "Pitta")
                                    }
                                />
                                I am a moderately sound sleeper, usually needs
                                less than eight hours to feel rested
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="SleepPattern"
                                    value="Kapha"
                                    onChange={() =>
                                        handleChange("SleepPattern", "Kapha")
                                    }
                                />
                                My sleep is deep and long. I tend to awaken
                                slowly in the morning
                            </label>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-xl font-bold mb-2">7. Joints :</h2>
                        <div className="flex flex-col gap-2">
                            <label>
                                <input
                                    type="radio"
                                    name="Joints"
                                    value="Vata"
                                    onChange={() =>
                                        handleChange("Joints", "Vata")
                                    }
                                />
                                My joints are thin and prominent and have a
                                tendency to crack
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="Joints"
                                    value="Pitta"
                                    onChange={() =>
                                        handleChange("Joints", "Pitta")
                                    }
                                />
                                My joints are loose and flexible.
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="Joints"
                                    value="Kapha"
                                    onChange={() =>
                                        handleChange("Joints", "Kapha")
                                    }
                                />
                                My joints are large, well knit and padded.
                            </label>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-xl font-bold mb-2">
                            8. Body Temperature :
                        </h2>
                        <div className="flex flex-col gap-2">
                            <label>
                                <input
                                    type="radio"
                                    name="BodyTemperature"
                                    value="Vata"
                                    onChange={() =>
                                        handleChange("BodyTemperature", "Vata")
                                    }
                                />
                                My hands and feet are usually cold and I prefer
                                a warm environment
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="BodyTemperature"
                                    value="Pitta"
                                    onChange={() =>
                                        handleChange("BodyTemperature", "Pitta")
                                    }
                                />
                                I am usually warm, regardless of the season, and
                                prefer a cooler environment.
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="BodyTemperature"
                                    value="Kapha"
                                    onChange={() =>
                                        handleChange("BodyTemperature", "Kapha")
                                    }
                                />
                                I am adaptable to most temperatures but do not
                                like cold, wet days.
                            </label>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-xl font-bold mb-2">
                            9.Temperament :
                        </h2>
                        <div className="flex flex-col gap-2">
                            <label>
                                <input
                                    type="radio"
                                    name="Temperament"
                                    value="Vata"
                                    onChange={() =>
                                        handleChange("Temperament", "Vata")
                                    }
                                />
                                I am lively and enthusiastic by nature. I like
                                to change.
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="Temperament"
                                    value="Pitta"
                                    onChange={() =>
                                        handleChange("Temperament", "Pitta")
                                    }
                                />
                                I am purposeful and intense. I like to convince.
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="Temperament"
                                    value="Kapha"
                                    onChange={() =>
                                        handleChange("Temperament", "Kapha")
                                    }
                                />
                                I am easy going and accepting. I like to
                                support.
                            </label>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-xl font-bold mb-2">
                            10 . Under Stress :
                        </h2>
                        <div className="flex flex-col gap-2">
                            <label>
                                <input
                                    type="radio"
                                    name="UnderStress"
                                    value="Vata"
                                    onChange={() =>
                                        handleChange("UnderStress", "Vata")
                                    }
                                />
                                I become anxious and/or worried.
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="UnderStress"
                                    value="Pitta"
                                    onChange={() =>
                                        handleChange("UnderStress", "Pitta")
                                    }
                                />
                                I become irritable and/or aggressive.
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="UnderStress"
                                    value="Kapha"
                                    onChange={() =>
                                        handleChange("UnderStress", "Kapha")
                                    }
                                />
                                I become withdrawn and/or reclusive.
                            </label>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-xl font-bold mb-2">
                            11. Tolerance to Physical exercise :
                        </h2>
                        <div className="flex flex-col gap-2">
                            <label>
                                <input
                                    type="radio"
                                    name="Tolerance"
                                    value="Vata"
                                    onChange={() =>
                                        handleChange("Tolerance", "Vata")
                                    }
                                />
                                Low tolerance for Physical work and exercises.
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="Tolerance"
                                    value="Pitta"
                                    onChange={() =>
                                        handleChange("Tolerance", "Pitta")
                                    }
                                />
                                Moderate tolerance for physical work and
                                exercise.
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="Tolerance"
                                    value="Kapha"
                                    onChange={() =>
                                        handleChange("Tolerance", "Kapha")
                                    }
                                />
                                High tolerance for Physical work and exercise.
                            </label>
                        </div>
                    </div>
                    
                    <div className="mb-8">
                        <h2 className="text-xl font-bold mb-2">
                            12. Veins visibility :
                        </h2>
                        <div className="flex flex-col gap-2">
                            <label>
                                <input
                                    type="radio"
                                    name="Veins"
                                    value="Vata"
                                    onChange={() =>
                                        handleChange("Veins", "Vata")
                                    }
                                />
                                Prominent, very visible.
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="Veins"
                                    value="Pitta"
                                    onChange={() =>
                                        handleChange("Veins", "Pitta")
                                    }
                                />
                                Medium prominence and visibility.
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="Veins"
                                    value="Kapha"
                                    onChange={() =>
                                        handleChange("Veins", "Kapha")
                                    }
                                />
                                Well covered, hidden veins.
                            </label>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-xl font-bold mb-2">
                            13. Digestion Status:
                        </h2>
                        <div className="flex flex-col gap-2">
                            <label>
                                <input
                                    type="radio"
                                    name="Digestion"
                                    value="Vata"
                                    onChange={() =>
                                        handleChange("Digestion", "Vata")
                                    }
                                />
                                Digestion not too strong, tendency to have gas.
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="Digestion"
                                    value="Pitta"
                                    onChange={() =>
                                        handleChange("Digestion", "Pitta")
                                    }
                                />
                                Strong digestion, can eat anything you like.
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="Digestion"
                                    value="Kapha"
                                    onChange={() =>
                                        handleChange("Digestion", "Kapha")
                                    }
                                />
                                Slow digestion, I am not hungry again for 5-6
                                hours.
                            </label>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-xl font-bold mb-2">
                            14. Nails Condition :
                        </h2>
                        <div className="flex flex-col gap-2">
                            <label>
                                <input
                                    type="radio"
                                    name="Nails"
                                    value="Vata"
                                    onChange={() =>
                                        handleChange("Nails", "Vata")
                                    }
                                />
                                Blackish, small, brittle nails texture.
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="Nails"
                                    value="Pitta"
                                    onChange={() =>
                                        handleChange("Nails", "Pitta")
                                    }
                                />
                                Reddish, small nails texture.
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="Nails"
                                    value="Kapha"
                                    onChange={() =>
                                        handleChange("Nails", "Kapha")
                                    }
                                />
                                Pinkish, big, smooth nails texture.
                            </label>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-xl font-bold mb-2">15. Memory:</h2>
                        <div className="flex flex-col gap-2">
                            <label>
                                <input
                                    type="radio"
                                    name="Memory"
                                    value="Vata"
                                    onChange={() =>
                                        handleChange("Memory", "Vata")
                                    }
                                />
                                Weak, tends to forget things easily.
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="Memory"
                                    value="Pitta"
                                    onChange={() =>
                                        handleChange("Memory", "Pitta")
                                    }
                                />
                                Good memory and can remember things for some
                                time easily.
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="Memory"
                                    value="Kapha"
                                    onChange={() =>
                                        handleChange("Memory", "Kapha")
                                    }
                                />
                                Great Memory and can remember things for a long
                                period of time.
                            </label>
                        </div>
                    </div>
              <div className="flex items-center justify-center">
                <button
                  type="submit"
                  className="bg-purple-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-purple-700 transition-all duration-300"
                >
                  Submit Answers
                </button>

              </div>
              {/* <p>{doshaData && doshaData.vata}</p> */}
              {doshaData && <DoshaChart data={doshaData} />}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default KnowYourDosha;
