/**
 * Definition for onSignIn, to be invoked by sign in button.
 * @param {googleUser}
 */
function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  var element = document.getElementById("status");
  renderProfile(element, profile);
};

/**
 * Definition for onSignInFailure, to be invoked by sign in button.
 * @param {googleUser}
 */
function onSignInFailure() {
  var fieldNameElement = document.getElementById("status").innerHTML = "SIGN IN FAILED!";
};

/**
 * Definition for signOut, to be invoked by sign out link.
 * @param {googleUser}
 */
function signOut(googleUser) {
  var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
  document.getElementById("status").innerHTML = "SIGN OUT SUCCESSFUL!";
};

/**
 * Renders profile details as child elements within a given element,
 * erasing any existing children.
 * @param {element} element
 * @param {profile} profile
 */
function renderProfile(element, profile) {
  if (element.hasChildNodes()) {
    console.log('Removing existing elements...');
    element.children = [];
  }

  console.log('Extracting profile details...');
  var id = profile.getId();
  var name = profile.getName();
  var givenName = profile.getGivenName();
  var familyName = profile.getFamilyName();
  var imageUrl = profile.getImageUrl();
  var email = profile.getEmail();
  console.log('id: ' + id);
  console.log('name: ' + name);
  console.log('givenName: ' + givenName);
  console.log('familyName: ' + familyName);
  console.log('imageUrl: ' + imageUrl);
  console.log('email: ' + email);

  console.log('Rendering elements...');
  element.appendChild(document.createTextNode('id: ' + id));
  element.appendChild(document.createElement('BR'));
  element.appendChild(document.createTextNode('name: ' + name));
  element.appendChild(document.createElement('BR'));
  element.appendChild(document.createTextNode('familyName: ' + familyName));
  element.appendChild(document.createElement('BR'));
  element.appendChild(document.createTextNode('givenName: ' + givenName));
  element.appendChild(document.createElement('BR'));
  element.appendChild(document.createElement('DIV'));
  element.lastChild.appendChild(document.createTextNode('image:'));
  element.lastChild.appendChild(document.createElement('IMG'));
  element.lastChild.lastChild.setAttribute('src', imageUrl);
  element.appendChild(document.createElement('BR'));
  element.appendChild(document.createTextNode('email: ' + email));
}
