<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Join Us Today</title>
  <link rel="icon" href="../src/assests/images/icons.png" type="images/png" />
  <link rel="stylesheet" href="../src/assests/css/joinToday.css" />

  <script src="../src/assests/javascript/joinToday.js" defer></script>
  <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
</head>

<body>

<!-- To Handle Data -->

<!-- pandey data haru aauxw yaha form haru ko aba ya bata Email ma pathaune ho ki database pathaune hai -->

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $postData = file_get_contents("php://input");
    $formData = json_decode($postData, true);
    
    if ($formData !== null) {
        if (isset($formData['firstName'])) {
            echo $formData['firstName'];
        } else {
            echo "First name not found in the data.";
        }
    } else {
        echo "Error decoding JSON data.";
    }
}
?>

  <?php include ('./header.php')?>
  <main>
    <section class="form_container">
      <section class="containers">
        <section class="title">Join Us </section>
        <form action="#">
          <section class="user__details">
            <section class="input__box">
              <span class="details">First Name</span>
              <input type="text" placeholder="E.g: John" required>
            </section>

            <section class="input__box">
              <span class="details">Last Name</span>
              <input type="text" placeholder="E.g: Smith" required>
            </section>

            <section class="input__box">
              <span class="details">Age</span>
              <input type="number" placeholder="E.g: 12" required>
            </section>

            <section class="input__box">
              <span class="details">Email</span>
              <input type="email" placeholder="E.g: johnsmith@gmail.com" required>
            </section>

            <section class="input__box">
              <span class="details">Address</span>
              <input type="text" placeholder="E.g: 123 Main Street, Sydney, NSW 2000" required>
            </section>

            <section class="input__box">
              <span class="details">Phone</span>
              <input type="tel" placeholder="E.g: (02) 1234 5678" required>
            </section>
          </section>
          <section class="gender__details">
            <input type="radio" name="gender" id="dot-1">
            <input type="radio" name="gender" id="dot-2">
            <input type="radio" name="gender" id="dot-3">
            <span class="gender__title">Gender</span>
            <section class="category">
              <label for="dot-1">
                <span class="dot one"></span>
                <span>Male</span>
              </label>
              <label for="dot-2">
                <span class="dot two"></span>
                <span>Female</span>
              </label>
              <label for="dot-3">
                <span class="dot three"></span>
                <span>Prefer not to say</span>
              </label>
            </section>
          </section>
          <section class="button">
            <input type="submit" value="Submit">
          </section>
        </form>
      </section>
    </section>
  </main>
  <?php include('./footer.php')?>
</body>

</html>