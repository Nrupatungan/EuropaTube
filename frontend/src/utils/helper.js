function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
}

function getInitials(fullName) {
  return fullName
    .split(' ')
    .map(name => name[0].toUpperCase())
    .join('');
}

const formatDuration = (duration) => {
let hours = Math.floor(duration / 3600)
let minutes = Math.floor((duration % 3600) / 60)
let seconds = Math.floor(duration % 60)

// Format seconds and minutes with leading zeros
seconds = parseInt(seconds.toString().padStart(2, '00'));
minutes = parseInt(minutes.toString().padStart(2, '00'));

// Format the duration based on the length
if (hours > 0) {

  // Format hours with leading zeros if needed
  hours = parseInt(hours.toString().padStart(2, '00'));
  return `${hours}:${minutes}:${seconds}`;
} else {
  return `${minutes}:${seconds}`;
}
}

const timeSince = (videoTimestamp) => {
const date = new Date(videoTimestamp);
const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);

let interval = seconds / 31536000; // 365 days
if (interval >= 1) {
  if(interval === 1){return "1 year"} 
  return Math.floor(interval) + " years";
}
interval = seconds / 2592000; // 30 days
if (interval >= 1) {
  if(interval === 1){return "1 month"}
  return Math.floor(interval) + " months";
}
interval = seconds / 86400; // 24 hours
if (interval >= 1) {
  if(interval === 1){return "1 day"}
  return Math.floor(interval) + " days";
}
interval = seconds / 3600; // 60 minutes
if (interval >= 1) {
  if(interval === 1){return "1 hour"}
  return Math.floor(interval) + " hours";
}
}

function viewsFormatter(views) {
  const units = ['', 'K', 'M', 'B', 'T'];
  let unitIndex = 0;

  while (views >= 1000 && unitIndex < units.length - 1) {
    views /= 1000;
    unitIndex++;
  }

  return views.toFixed(2).replace(/\.?0+$/, '') + units[unitIndex];
}

function subscribersFormatter(subscribers){
  const units = ['', 'K', 'M', 'B', 'T'];
  let unitIndex = 0;
  while (subscribers >= 1000 && unitIndex < units.length - 1) {
    subscribers /= 1000;
    unitIndex++;
  }
  return subscribers.toFixed(2).replace(/\.?0+$/, '') + units[unitIndex] + (subscribers === 1 ? ' subscriber' : ' subscribers');
}

export {getInitials, timeSince, formatDuration, debounce, viewsFormatter, subscribersFormatter}