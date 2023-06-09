"""auto gen

Revision ID: 927a86a49f07
Revises: 2c843f818fa9
Create Date: 2022-02-03 20:46:58.796931

"""
from alembic import op
import sqlalchemy as sa

# revision identifiers, used by Alembic.
revision = '927a86a49f07'
down_revision = '2c843f818fa9'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('users',
                    sa.Column('id', sa.Integer(), nullable=False),
                    sa.Column('email', sa.String(), nullable=False),
                    sa.Column('password', sa.String(), nullable=False),
                    sa.Column('create_at', sa.TIMESTAMP(timezone=True), server_default=sa.text('now()'),
                              nullable=False),
                    sa.PrimaryKeyConstraint('id'),
                    sa.UniqueConstraint('email')
                    )
    op.create_table('votes',
                    sa.Column('post_id', sa.Integer(), nullable=False),
                    sa.Column('user_id', sa.Integer(), nullable=False),
                    sa.ForeignKeyConstraint(['post_id'], ['posts.id'], onupdate='CASCADE', ondelete='CASCADE'),
                    sa.ForeignKeyConstraint(['user_id'], ['users.id'], onupdate='CASCADE', ondelete='CASCADE'),
                    sa.PrimaryKeyConstraint('post_id', 'user_id')
                    )
    op.add_column('posts', sa.Column('published', sa.Boolean(), server_default='TRUE', nullable=False))
    op.add_column('posts',
                  sa.Column('create_at', sa.TIMESTAMP(timezone=True), server_default=sa.text('now()'), nullable=False))
    op.add_column('posts', sa.Column('owner_id', sa.Integer(), nullable=False))
    op.create_foreign_key(None, 'posts', 'users', ['owner_id'], ['id'], onupdate='CASCADE', ondelete='CASCADE')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'posts', type_='foreignkey')
    op.drop_column('posts', 'owner_id')
    op.drop_column('posts', 'create_at')
    op.drop_column('posts', 'published')
    op.drop_table('votes')
    op.drop_table('users')
    # ### end Alembic commands ###
