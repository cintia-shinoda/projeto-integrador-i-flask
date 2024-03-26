from flask import Flask, render_template

app = Flask(__name__)

@app.route('/inicio')
def home():
    return render_template('home.html')

app.run()