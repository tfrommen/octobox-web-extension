const notificationsPanel = document.querySelector('.panel-notifications');
const navBar = document.getElementsByClassName('navbar-nav')[0];

const githubMenuLink = document.createElement('a');
githubMenuLink.href = 'https://github.com/notifications';
githubMenuLink.classList.add('btn');
githubMenuLink.classList.add('btn-sm');

githubMenuLink.title = 'Open GitHub Notifications page';
githubMenuLink.id = 'github';
githubMenuLink.style.paddingRight = '0';

githubMenuLink.innerHTML = '<svg class="octicon octicon-bell" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14 12v1H0v-1l.73-.58c.77-.77.81-2.55 1.19-4.42C2.69 3.23 6 2 6 2c0-.55.45-1 1-1s1 .45 1 1c0 0 3.39 1.23 4.16 5 .38 1.88.42 3.66 1.19 4.42l.66.58H14zm-7 4c1.11 0 2-.89 2-2H5c0 1.11.89 2 2 2z"></path></svg>';

githubMenuSVG = githubMenuLink.getElementsByTagName("svg")[0];
githubMenuSVG.style.width = "14px";
githubMenuSVG.style.height = "14px";
githubMenuSVG.style.verticalAlign = "-2px";

const githubMenuItem = document.createElement('li');
githubMenuItem.classList.add('nav-item');
githubMenuItem.classList.add('nav-link');
githubMenuItem.classList.add('d-none');
githubMenuItem.classList.add('d-md-block');

githubMenuItem.appendChild(githubMenuLink);

navBar.prepend(githubMenuItem);
