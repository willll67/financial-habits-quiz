document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('quizForm');
    const resultSection = document.getElementById('result');
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
  
      // Initialize scores for each personality type.
      const scores = {
        ant: 0,
        owl: 0,
        dolphin: 0,
        bear: 0,
        fox: 0,
        squirrel: 0
      };
  
      // Collect answers from the form.
      const formData = new FormData(form);
      for (let [question, answer] of formData.entries()) {
        if (scores.hasOwnProperty(answer)) {
          scores[answer]++;
        }
      }
  
      // Determine the dominant personality type.
      let dominantType = '';
      let maxScore = 0;
      // In case of a tie, prioritize the "owl" (strategic planner)
      for (let type in scores) {
        if (scores[type] > maxScore || (scores[type] === maxScore && type === 'owl')) {
          maxScore = scores[type];
          dominantType = type;
        }
      }
  
      // Prepare detailed result analysis and advice.
      let resultHTML = '';
      switch (dominantType) {
        case 'ant':
          resultHTML = `<h2>The Ant: The Disciplined Saver</h2>
                        <p><strong>Analysis:</strong> You are systematic and value security above all. Your saving habits are your superpower.</p>
                        <p><strong>Advice:</strong> Consider diversifying your investments. Once your emergency fund is secure, explore opportunities that can grow your savings even further.</p>`;
          break;
        case 'owl':
          resultHTML = `<h2>The Owl: The Strategic Planner</h2>
                        <p><strong>Analysis:</strong> Your thoughtful planning and research set you apart. You’re always one step ahead when it comes to your finances.</p>
                        <p><strong>Advice:</strong> Keep refining your strategy and consider advanced investment options that align with your long-term goals.</p>`;
          break;
        case 'dolphin':
          resultHTML = `<h2>The Dolphin: The Social Spender</h2>
                        <p><strong>Analysis:</strong> You enjoy life’s pleasures and value social connections. While fun is important, you sometimes leave room for saving.</p>
                        <p><strong>Advice:</strong> Strive for a balance between indulgence and saving. Even a small, consistent contribution to your savings can secure your future.</p>`;
          break;
        case 'bear':
          resultHTML = `<h2>The Bear: The Cautious Hibernator</h2>
                        <p><strong>Analysis:</strong> Security is your top priority. Your careful approach ensures you’re always prepared for the unexpected.</p>
                        <p><strong>Advice:</strong> Consider exploring a few low-to-moderate risk investments to enhance your returns while maintaining your strong safety net.</p>`;
          break;
        case 'fox':
          resultHTML = `<h2>The Fox: The Opportunistic Investor</h2>
                        <p><strong>Analysis:</strong> You have a knack for spotting opportunities and aren’t afraid to take calculated risks. Your dynamic approach is exciting!</p>
                        <p><strong>Advice:</strong> Balance your bold moves with some conservative investments to protect against market fluctuations.</p>`;
          break;
        case 'squirrel':
          resultHTML = `<h2>The Squirrel: The Prepared Hoarder</h2>
                        <p><strong>Analysis:</strong> You strike a healthy balance between saving and spending. Your flexibility allows you to enjoy life while being prepared for the future.</p>
                        <p><strong>Advice:</strong> A slightly more structured savings plan could help optimize your strategy without sacrificing your spontaneity.</p>`;
          break;
        default:
          resultHTML = `<p>We couldn't determine your financial personality type. Please try again.</p>`;
      }
  
      resultSection.innerHTML = resultHTML;
      resultSection.scrollIntoView({ behavior: 'smooth' });
    });
  });
  