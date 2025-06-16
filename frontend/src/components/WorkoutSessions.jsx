import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session" id="workouts">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSION</h1>
        <p>
          Achieve your fitness goals with our top-rated workout sessions designed for all levels. Each session is crafted by certified trainers to maximize your results.
        </p>
        <img src="/img5.jpg" alt="workout" />
      </div>
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
          Join our featured bootcamps for an immersive workout experience. These sessions combine high-intensity training with expert coaching to help you unlock your potential.
        </p>
        <div className="bootcamps">
          <div>
            <h4>Full-Body Bootcamp</h4>
            <p>
              This bootcamp focuses on strength, endurance, and flexibility. Suitable for all fitness levels, it combines various exercises for a comprehensive workout.
            </p>
          </div>
          <div>
            <h4>HIIT Training Bootcamp</h4>
            <p>
              Experience high-intensity interval training that maximizes fat loss and builds endurance in a fun group setting.
            </p>
          </div>
          <div>
            <h4>Yoga Bootcamp</h4>
            <p>
              Rejuvenate and strengthen your body with our yoga bootcamp designed to improve your flexibility and mental clarity.
            </p>
          </div>
          <div>
            <h4>Cardio Blast Bootcamp</h4>
            <p>
              Get your heart pumping with this cardio-focused bootcamp, combining running, cycling, and dynamic workouts for effective weight loss.
            </p>
          </div>
          <div>
            <h4>Strength & Conditioning Bootcamp</h4>
            <p>
              Build muscle and improve your overall fitness with our strength and conditioning program tailored for all levels.
            </p>
          </div>
          <div>
            <h4>Group Fitness Bootcamp</h4>
            <p>
              Join our community in this group fitness bootcamp that fosters teamwork while pushing your limits for an engaging workout experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;
