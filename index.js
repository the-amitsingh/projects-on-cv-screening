console.log("CV screening ");

const data = [
    {
        Name: 'Aakash  ',
        age: 18,
        city: 'Kolkata',
        Language: 'python',
        framework: 'Django',
        Image: 'https://randomuser.me/api/portraits/men/75.jpg'
    },
    {
        Name: 'Raghav shergil ',
        age: 20,
        city: 'Bihar',
        Language: 'C++',
        framework: 'Angular',
        Image: 'https://randomuser.me/api/portraits/men/76.jpg'
    }, {
        Name: 'Ritesh aggarwal',
        age: 26,
        city: 'Bangalore',
        Language: 'Javascript',
        framework: 'flask',
        Image: 'https://randomuser.me/api/portraits/men/80.jpg'
    }, {
        Name: 'Ankit Raj ',
        age: 20,
        city: 'Kathmandu ',
        Language: 'python',
        framework: 'Django',
        Image: 'https://randomuser.me/api/portraits/men/92.jpg'
    },
    {
        Name: '  cadilia keth',
        age: 24,
        city: 'Mumbai',
        Language: 'python',
        framework: 'flask',
        Image: 'https://randomuser.me/api/portraits/women/89.jpg'
    },
    {
        Name: 'Kethi ',
        age: 30,
        city: 'New york',
        Language: 'python',
        framework: 'Django',
        Image: 'https://randomuser.me/api/portraits/women/90.jpg'
    },
    {
        Name: 'Karlin ',
        age: 30,
        city: 'Amsterdam',
        Language: 'c language',
        framework: false,
        Image: 'https://randomuser.me/api/portraits/women/58.jpg'
    }, {
        Name: 'paul',
        age: 38,
        city: 'Mumbai',
        Language: 'perl',
        framework: 'PHP',
        Image: 'https://randomuser.me/api/portraits/men/95.jpg'
    }, {
        Name: 'Rahul mishra  ',
        age: 28,
        city: 'Delhi',
        Language: 'java',
        framework: 'Loravel',
        Image: 'https://randomuser.me/api/portraits/men/91.jpg'
    },
]

//cv Iterator
function cvIterator(profiles) {
    let nextIndex = 0;
    return {
        next: function () {
            return nextIndex < profiles.length ?
                { value: profiles[nextIndex++], done: false } :
                { done: true }
        }
    };
}
//Button listener for next button
const candidates = cvIterator(data);
//Button listener for next button 
const next = document.getElementById('next');
next.addEventListener('click', nextCV);


function nextCV() {
    const currentCandidate = candidates.next().value;

    let Image = document.getElementById('image');
    let profiles = document.getElementById('profile');
    if (currentCandidate != undefined){ 
    Image.innerHTML = `<img src= '${currentCandidate.Image}'>`;
    profiles.innerHTML = `<ul class="list-group">
    <li class="list-group-item disabled" aria-disabled="true">Name: ${currentCandidate.Name}</li>
    <li class="list-group-item disabled" aria-disabled="true">Age: ${currentCandidate.age} years old </li>
    <li class="list-group-item disabled" aria-disabled="true">city:${currentCandidate.city}</li>
    <li class="list-group-item disabled" aria-disabled="true">Works on :${currentCandidate.Language}</li>
    <li class="list-group-item disabled" aria-disabled="true">Using: ${currentCandidate.framework} framework</li>
    <li class="list-group-item disabled" aria-disabled="true">${currentCandidate.Image}</li>
    
  </ul>`;
    }
    else{
        alert('End of candidate application');
        window.location.reload();
    }
}