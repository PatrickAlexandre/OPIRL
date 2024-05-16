
        document.addEventListener('DOMContentLoaded', function() {
            const emojis = [
                "🍏", "🍎", "🍐", "🍊", "🍋", "🍌", "🍉", "🍇", "🍓", "🍈", 
                "🍒", "🍑", "🍍", "🥭", "🍅", "🍆", "🥑", "🥦", "🥕", "🌽", 
                "🌶️", "🥒", "🥬"
            ];
            const chromosomes = Array.from({ length: 22 }, (_, i) => ({ name: `Chromosome ${i + 1}`, emoji: emojis[i] }));
            const chromosomesGrid = document.getElementById('chromosomes-grid');
            chromosomes.forEach(chromosome => {
                const gridItem = document.createElement('div');
                gridItem.classList.add('grid-item');
                gridItem.innerHTML = `<img src="https://via.placeholder.com/50" alt="${chromosome.name}" title="${chromosome.name} ${chromosome.emoji}">`;
                chromosomesGrid.appendChild(gridItem);
            });

            // Add the 23rd chromosome selector
            const chromosome23Item = document.createElement('div');
            chromosome23Item.classList.add('grid-item');
            chromosome23Item.innerHTML = `
                <select id="chromosome" name="chromosome" class="w3-select w3-border">
                    <option value="XX">XX (Femme) 🚺</option>
                    <option value="XY">XY (Homme) 🚹</option>
                </select>
            `;
            chromosomesGrid.appendChild(chromosome23Item);

            const mbForm = document.getElementById('mb-form');
            const dob = document.getElementById('dob');
            const weight = document.getElementById('weight');
            const height = document.getElementById('height');
            const chromosome = document.getElementById('chromosome');
            const activityLevel = document.getElementById('activity-level');

            // Set default value for date of birth
            const today = new Date().toISOString().split('T')[0];
            dob.value = today;

            [dob, weight, height, chromosome, activityLevel].forEach(element => {
                element.addEventListener('input', calculateMetabolism);
            });

            function calculateMetabolism() {
                const chromosomeValue = chromosome.value;
                const dobValue = dob.value;
                const weightValue = parseFloat(weight.value);
                const heightValue = parseFloat(height.value);
                const activityMultiplier = parseFloat(activityLevel.value);
                if (dobValue && weightValue && heightValue && chromosomeValue) {
                    const age = calculateAge(dobValue);
                    let mb;

                    if (chromosomeValue === 'XX') {
                        mb = 2.741 + 0.0402 * weightValue + 0.711 * heightValue - 0.0197 * age;
                    } else if (chromosomeValue === 'XY') {
                        mb = 0.276 + 0.0573 * weightValue + 2.073 * heightValue - 0.0285 * age;
                    }

                    const dailyExpenditure = mb * activityMultiplier;

                    document.getElementById('mb-result').textContent = `Votre Métabolisme de Base est de ${mb.toFixed(2)} kcal/jour. Votre dépense quotidienne est de ${dailyExpenditure.toFixed(2)} kcal/jour.`;

                    updateLifeExpectancy(age, chromosomeValue);
                }
            }

            function calculateAge(dob) {
                const diffMs = Date.now() - new Date(dob).getTime();
                const ageDate = new Date(diffMs);
                return Math.abs(ageDate.getUTCFullYear() - 1970);
            }

            function loginWith(provider) {
                alert(`Login avec ${provider} simulé.`);
            }

            const ctx = document.getElementById('myChart').getContext('2d');
            const myChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: [
                        'Investing in Stocks (08:00)', 'Networking (09:00)', 'Personal Development (10:00)', 
                        'Fitness Routine (11:00)', 'Reading (12:00)', 'Managing Businesses (13:00)', 
                        'Traveling (14:00)', 'Learning New Skills (15:00)', 'Real Estate Investments (16:00)', 
                        'Meditation (17:00)', 'Philanthropy (18:00)', 'High-End Dining (19:00)', 
                        'Luxury Shopping (20:00)', 'Golfing (21:00)', 'Collecting Art (22:00)', 
                        'Attending Conferences (23:00)', 'Advising Startups (00:00)', 'Yachting (01:00)', 
                        'Skiing (02:00)', 'Spa Days (03:00)', 'Driving Luxury Cars (04:00)', 
                        'Charity Events (05:00)', 'Exclusive Parties (06:00)'
                    ],
                    datasets: [{
                        label: 'Habitudes',
                        data: [12, 19, 15, 10, 8, 20, 14, 16, 9, 6, 18, 21, 11, 7, 13, 5, 4, 3, 2, 1, 0, 1, 2],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)',
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)',
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)',
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });

            function updateLifeExpectancy(age, chromosome) {
                const maxLifeExpectancyFemale = 82;
                const maxLifeExpectancyMale = 78;
                let remainingLifeExpectancy;

                if (chromosome === 'XX') {
                    remainingLifeExpectancy = maxLifeExpectancyFemale - age;
                } else if (chromosome === 'XY') {
                    remainingLifeExpectancy = maxLifeExpectancyMale - age;
                }

                remainingLifeExpectancy = remainingLifeExpectancy < 0 ? 0 : remainingLifeExpectancy;

                const percentage = (remainingLifeExpectancy / (chromosome === 'XX' ? maxLifeExpectancyFemale : maxLifeExpectancyMale)) * 100;
                const progressBar = chromosome === 'XX' ? document.getElementById('lifeExpectancyFemale') : document.getElementById('lifeExpectancyMale');

                progressBar.style.width = percentage + '%';
                progressBar.textContent = remainingLifeExpectancy + ' ans';

                // Mettre à jour la barre de progression principale
                document.getElementById('mainProgressBar').style.width = percentage + '%';
                document.getElementById('mainProgressBar').textContent = percentage.toFixed(2) + '%';
            }

            // Change theme color based on MBTI type
            const mbtiSelect = document.getElementById('mbti-select');
            mbtiSelect.addEventListener('change', function() {
                const mbtiColors = {
                    "ISTJ": "#ff9999", // Light Red
                    "ISFJ": "#ffcc99", // Light Orange
                    "INFJ": "#ffff99", // Light Yellow
                    "INTJ": "#99ff99", // Light Green
                    "ISTP": "#99ffcc", // Light Cyan
                    "ISFP": "#99ccff", // Light Blue
                    "INFP": "#cc99ff", // Light Purple
                    "INTP": "#ff99cc", // Light Pink
                    "ESTP": "#ff6666", // Red
                    "ESFP": "#ffb366", // Orange
                    "ENFP": "#ffff66", // Yellow
                    "ENTP": "#66ff66", // Green
                    "ESTJ": "#66ffb3", // Cyan
                    "ESFJ": "#66b3ff", // Blue
                    "ENFJ": "#b366ff", // Purple
                    "ENTJ": "#ff66b3"  // Pink
                };
                const mbtiInfo = {
                    "ISTJ": {
                        "functionAux": "Extraverted Thinking",
                        "functionPrimary": "Introverted Sensing",
                        "demographic": "11.6%",
                        "subtype": "Logistician",
                        "nickname": "Inspector"
                    },
                    "ISFJ": {
                        "functionAux": "Extraverted Feeling",
                        "functionPrimary": "Introverted Sensing",
                        "demographic": "13.8%",
                        "subtype": "Defender",
                        "nickname": "Protector"
                    },
                    "INFJ": {
                        "functionAux": "Extraverted Feeling",
                        "functionPrimary": "Introverted Intuition",
                        "demographic": "1.5%",
                        "subtype": "Advocate",
                        "nickname": "Mystic"
                    },
                    "INTJ": {
                        "functionAux": "Extraverted Thinking",
                        "functionPrimary": "Introverted Intuition",
                        "demographic": "2.1%",
                        "subtype": "Architect",
                        "nickname": "Mastermind"
                    },
                    "ISTP": {
                        "functionAux": "Extraverted Sensing",
                        "functionPrimary": "Introverted Thinking",
                        "demographic": "5.4%",
                        "subtype": "Virtuoso",
                        "nickname": "Craftsman"
                    },
                    "ISFP": {
                        "functionAux": "Extraverted Sensing",
                        "functionPrimary": "Introverted Feeling",
                        "demographic": "8.8%",
                        "subtype": "Adventurer",
                        "nickname": "Artist"
                    },
                    "INFP": {
                        "functionAux": "Extraverted Intuition",
                        "functionPrimary": "Introverted Feeling",
                        "demographic": "4.4%",
                        "subtype": "Mediator",
                        "nickname": "Dreamer"
                    },
                    "INTP": {
                        "functionAux": "Extraverted Intuition",
                        "functionPrimary": "Introverted Thinking",
                        "demographic": "3.3%",
                        "subtype": "Logician",
                        "nickname": "Thinker"
                    },
                    "ESTP": {
                        "functionAux": "Introverted Thinking",
                        "functionPrimary": "Extraverted Sensing",
                        "demographic": "4.3%",
                        "subtype": "Entrepreneur",
                        "nickname": "Dynamo"
                    },
                    "ESFP": {
                        "functionAux": "Introverted Feeling",
                        "functionPrimary": "Extraverted Sensing",
                        "demographic": "8.5%",
                        "subtype": "Entertainer",
                        "nickname": "Performer"
                    },
                    "ENFP": {
                        "functionAux": "Introverted Feeling",
                        "functionPrimary": "Extraverted Intuition",
                        "demographic": "8.1%",
                        "subtype": "Campaigner",
                        "nickname": "Champion"
                    },
                    "ENTP": {
                        "functionAux": "Introverted Thinking",
                        "functionPrimary": "Extraverted Intuition",
                        "demographic": "3.2%",
                        "subtype": "Debater",
                        "nickname": "Visionary"
                    },
                    "ESTJ": {
                        "functionAux": "Introverted Sensing",
                        "functionPrimary": "Extraverted Thinking",
                        "demographic": "8.7%",
                        "subtype": "Executive",
                        "nickname": "Supervisor"
                    },
                    "ESFJ": {
                        "functionAux": "Introverted Sensing",
                        "functionPrimary": "Extraverted Feeling",
                        "demographic": "12.3%",
                        "subtype": "Consul",
                        "nickname": "Provider"
                    },
                    "ENFJ": {
                        "functionAux": "Introverted Intuition",
                        "functionPrimary": "Extraverted Feeling",
                        "demographic": "2.5%",
                        "subtype": "Protagonist",
                        "nickname": "Teacher"
                    },
                    "ENTJ": {
                        "functionAux": "Introverted Intuition",
                        "functionPrimary": "Extraverted Thinking",
                        "demographic": "1.8%",
                        "subtype": "Commander",
                        "nickname": "Fieldmarshal"
                    }
                };

                const selectedType = mbtiSelect.value;
                document.body.style.backgroundColor = mbtiColors[selectedType];

                const info = mbtiInfo[selectedType];
                const infoHtml = `
                    <p><strong>Fonction auxiliaire :</strong> ${info.functionAux}</p>
                    <p><strong>Fonction principale :</strong> ${info.functionPrimary}</p>
                    <p><strong>Fréquence démographique :</strong> ${info.demographic}</p>
                    <p><strong>Sous-tempérament :</strong> ${info.subtype}</p>
                    <p><strong>Surnom :</strong> ${info.nickname}</p>
                `;
                document.getElementById('mbti-info').innerHTML = infoHtml;
            });

            // Trigger the change event to set the initial theme
            mbtiSelect.dispatchEvent(new Event('change'));

            // Modal functionality
            const modal = document.getElementById("metabolismModal");
            const btn = document.getElementById("openModalBtn");
            const span = document.getElementsByClassName("close")[0];

            btn.onclick = function() {
                modal.style.display = "block";
            }

            span.onclick = function() {
                modal.style.display = "none";
            }

            window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }
        });
