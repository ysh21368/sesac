from ..db import db
from datetime import datetime
from flask import Blueprint, render_template, url_for, redirect, request

bp = Blueprint('answer', __name__, url_prefix='/answer')

@bp.route('/create/<int:question_id>', methods=('POST',))
def create(question_id):
    cursor = db.cursor()
    content = request.form['content']
    sql = "insert into answer (question_id, content, create_date) values ({},'{}','{}')".format(question_id, content, datetime.now())
    cursor.execute(sql)
    db.commit()

    return redirect(url_for('question.detail', question_id=question_id))
