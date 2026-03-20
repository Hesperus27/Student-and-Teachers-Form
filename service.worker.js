self.addEventListener("install", function(e) {
  e.waitUntil(
    caches.open("teacher-form-cache").then(function(cache) {
      return cache.addAll(["index.html"]);
    })
  );
});
